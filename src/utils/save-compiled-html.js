const compiledHTMLFile = (html, css, js) => {
  let result = html;
  result = result.replace("<JSBX-CSS>", `<style>\n${css}\n</style>`);
  result = result.replace(
    `<JSBX-JS>`,
    `<script>\n(() => { \n${js}\n })()\n</script>`
  );
  return result;
};

export { compiledHTMLFile };
