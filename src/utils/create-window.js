let interval = null;

const createWindow = (iframeRef, { html, js, css }) => {
  clearInterval(interval);

  const ifrm =
    iframeRef.current.contentWindow ||
    iframeRef.current.contentDocument.document ||
    iframeRef.current.contentDocument;
  const iframeDoc = ifrm.document;
  iframeDoc.open();
  iframeDoc.write(html);
  iframeDoc.close();

  interval = setInterval(() => {
    if (!iframeDoc.body) {
      iframeDoc = iframeRef?.contentWindow?.document;
      console.log(iframeDoc.body);
      return;
    } else clearInterval(interval);

    const style = iframeDoc.createElement("style");
    style.innerHTML = css;
    iframeDoc.head.appendChild(style);

    const injectScript = iframeDoc.createElement("script");
    injectScript.innerHTML = /*javascript*/ `
        window.console.log = parent.window.console.log;
        window.console.error = parent.window.console.error;
        window.console.info = parent.window.console.info;
        window.console.warn = parent.window.console.warn;

        window.onerror = (error, url, line) => {
            parent.window.console.error(error, null, ' | line ' + line);
        }
        if(window.onload) window.onload();
    `;
    const jsScript = iframeDoc.createElement("script");
    jsScript.innerHTML = /*javascript*/ `
    (() => {
        ${js}
    })()
    `;

    iframeDoc.body.appendChild(injectScript);
    iframeDoc.body.appendChild(jsScript);
  }, [100]);
};

module.exports = createWindow;
