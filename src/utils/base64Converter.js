import LZString from "lz-string";

export const utf8ToBase64 = (str) => {
  return LZString.compressToEncodedURIComponent(str);
};

export const base64ToUtf8 = (str) => {
  return LZString.decompressFromEncodedURIComponent(str);
};
