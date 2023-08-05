import { utf8ToBase64, base64ToUtf8 } from "./base64Converter";

export const handleGetQueryParams = (queryParams, type, defaultContent) => {
  const p = queryParams.get(type);
  if (p) return base64ToUtf8(p);
  return defaultContent;
};

export const handleSetQueryParams = (setQueryParameters, type, value) => {
  setQueryParameters((params) => {
    params.set(type, utf8ToBase64(value));
    return params;
  });
};
