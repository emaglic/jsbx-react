const utf8ToBase64 = (str) => {
  const base64 = window.btoa(unescape(encodeURIComponent(str)));
  // Make the base64 string URL-safe
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const base64ToUtf8 = (str) => {
  // Reverse the URL-safe base64 encoding
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(escape(window.atob(base64)));
};

module.exports = {
  utf8ToBase64,
  base64ToUtf8,
};
