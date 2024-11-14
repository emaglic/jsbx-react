let interval = null;
let iframeDoc;

const replaceStrings = (originalString, regex, replaceValue) => {
  let result = originalString.replace(regex, replaceValue);
  return result;
};

const getBabelPreset = (js) => {
  const regex = /<\s*jsbx-js\s+[^>]*presets=["']([^"']+)["']\s*\/?\s*>/i;

  const matches = js.match(regex);
  if (matches) {
    return matches[1] || matches[2];
  }
  return undefined;
};

const getScriptType = (js) => {
  const regex = /<\s*jsbx-js\s+[^>]*type=["']([^"']+)["'][^>]*>/i;
  const matches = js.match(regex);
  if (matches) {
    return matches[1] || matches[2];
  }
  return "text/javascript";
};

const createWindow = (iframeRef, { html, js, css }) => {
  clearInterval(interval);

  // Do some fancy stuff to replace the <JSBX-CSS> and <JSBX-JS> tags in the html string
  // Note: <JSBX-JS> is an emtpy script with an id of jsbx-js, it is later replaced with the actual script contents.
  // ---------------------------------------------------------------------
  let _html = html;

  _html = replaceStrings(
    _html,
    /<\s*JSBX-CSS\s*\/?\s*>/i,
    `<style id='jsbx-css'>${css}</style>`
  );
  _html = replaceStrings(
    _html,
    /<\s*JSBX-JS(?:\s+[^>]*)?\s*\/?>/i,
    `<script id='jsbx-js'></script>`
  );

  // ---------------------------------------------------------------------

  const ifrm =
    iframeRef.current.contentWindow ||
    iframeRef.current.contentDocument.document ||
    iframeRef.current.contentDocument;

  iframeDoc = ifrm.document;

  iframeDoc.open();
  iframeDoc.write(_html);
  iframeDoc.close();

  interval = setInterval(() => {
    if (!iframeDoc?.body) {
      iframeDoc = iframeRef?.current?.contentWindow?.document;
      return;
    } else clearInterval(interval);

    const injectScript = iframeDoc.createElement("script");
    injectScript.innerHTML = /*javascript*/ `
        window.console.log = parent.window.childConsole.log;
        window.console.error = parent.window.childConsole.error;
        window.console.info = parent.window.childConsole.info;
        window.console.warn = parent.window.childConsole.warn;
        window.console.success = parent.window.childConsole.success;

        // window.onerror = (error, url, line) => {
        //    parent.window.console.error(error, null, ' | line ' + line);
        // }

        window.onerror = (error, url, line) => {
          parent.window.childConsole.error("Error: " + error.toString() + " | Line: " + line)
        }

        if(window.onload) window.onload();
    `;

    iframeDoc.head.prepend(injectScript);

    const scriptType = getScriptType(html);
    const babelPreset = getBabelPreset(html);

    const jsScript = iframeDoc.querySelector("#jsbx-js");

    if (jsScript) {
      const script = iframeDoc.createElement("script");
      script.setAttribute("id", "jsbx-js");
      script.setAttribute("type", scriptType);
      script.innerHTML = /*javascript*/ `
      (() => {
        ${js}
      })()
      `;
      jsScript.replaceWith(script);
    }

    if (jsScript && scriptType === "text/babel") {
      const babelBoilerplate = iframeDoc.createElement("script");
      const babelPresetString = babelPreset || "";
      babelBoilerplate.innerHTML = /*javascript*/ `
        (() => {
          // Babel Boilerplate
        const script = document.getElementById('jsbx-js');
        const code = script.textContent;
        const babelPresets = "${babelPresetString}" ? "${babelPresetString}".split(',').map((str) => str.trim()).filter((str) => str) : undefined;
        const options = babelPresets ? { presets: babelPresets} : {};
        const transpiledCode = Babel.transform(code, options).code;
        new Function(transpiledCode)();
        })()
      `;
      iframeDoc.body.appendChild(babelBoilerplate);
    }
  }, [100]);
};

export default createWindow;
