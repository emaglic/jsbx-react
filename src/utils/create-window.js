let interval = null;

const createWindow = (iframeRef, { html, js, css }) => {
  clearInterval(interval);

  // Do some fancy stuff to replace the <JSBX-CSS> and <JSBX-JS> tags in the html string
  // Note: <JSBX-JS> is an emtpy script with an id of jsbx-js, it is later replaced with the actual script contents.
  // ---------------------------------------------------------------------
  let _html = html;
  _html = _html.replace(
    "<JSBX-CSS>",
    `
    <style id='jsbx-css'>${css}</style>
  `
  );
  _html = _html.replace("<JSBX-JS>", `<script id='jsbx-js'></script>`);
  // ---------------------------------------------------------------------

  const ifrm =
    iframeRef.current.contentWindow ||
    iframeRef.current.contentDocument.document ||
    iframeRef.current.contentDocument;
  const iframeDoc = ifrm.document;
  iframeDoc.open();
  iframeDoc.write(_html);
  iframeDoc.close();

  interval = setInterval(() => {
    if (!iframeDoc.body) {
      iframeDoc = iframeRef?.contentWindow?.document;
      console.log(iframeDoc.body);
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

    const jsScript = iframeDoc.querySelector("#jsbx-js");
    if (jsScript) {
      const script = iframeDoc.createElement("script");
      script.innerHTML = /*javascript*/ `
      (() => {
          ${js}
       })()
      `;
      jsScript.replaceWith(script);
    }
  }, [100]);
};

export default createWindow;
