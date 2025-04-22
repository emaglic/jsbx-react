import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  handleGetQueryParams,
  handleSetQueryParams,
} from "../../utils/query-params";
import createWindow from "../../utils/create-window";

import { ViewerContainer, ViewerIframe } from "./index.style";

const Viewer = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const iframeRef = useRef(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    setCode({
      html: handleGetQueryParams(queryParams, "html", ""),
      css: handleGetQueryParams(queryParams, "css", ""),
      js: handleGetQueryParams(queryParams, "js", ""),
    });
  }, []);

  useEffect(() => {
    if (!code || !code.html) return;
    createWindow(iframeRef, code, true);
  }, [iframeRef.current]);

  return (
    <ViewerContainer>
      <ViewerIframe ref={iframeRef} />
    </ViewerContainer>
  );
};

export default Viewer;
