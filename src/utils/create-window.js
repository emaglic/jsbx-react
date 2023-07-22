const createWindow = (iframeDoc, { html, js, css }) => {
  if (!iframeDoc) return "";

  iframeDoc.write(html);

  let interval = setInterval(() => {
    if (!iframeDoc.body) return;
    else clearInterval(interval);

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

  // const retHTML = /*html*/ `
  /* <!DOCTYPE html>
    <html>
    <head>
    <script>
        window.console.log = parent.window.console.log;
        window.console.error = parent.window.console.error;
        window.console.info = parent.window.console.info;
        window.console.warn = parent.window.console.warn;

        window.onerror = (error, url, line) => {
            parent.window.console.error(error, null, ' | line ' + line);
        }
        if(window.onload) window.onload();
    </script>
    <style>${css}</style>
    </head>
    <body>
        ${html}
    <script>
        (() => { ${js} })()
    </script>
    </body>
    </html>
    `; */

  // return retHTML;
};

module.exports = createWindow;
