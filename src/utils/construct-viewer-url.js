import { utf8ToBase64, base64ToUtf8 } from "./base64Converter";

const constructViewerURL = ({ html, css, js }) => {
  const origin =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://eben.design/static/tools/jsbx2";
  const url = `${origin}/#/viewer/?html=${utf8ToBase64(
    html
  )}&css=${utf8ToBase64(css)}&js=${utf8ToBase64(js)}`;
  return url;
};

export default constructViewerURL;
