import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab, Button } from "@mui/material";
import { Container, Header } from "./index.style";
import { html } from "../../utils/default-content/html";
import { utf8ToBase64, base64ToUtf8 } from "../../utils/base64Converter";

const LeftPanel = ({ setEditorValues }) => {
  const [value, setValue] = useState(0);

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);

  const [queryParameters, setQueryParams] = useSearchParams();

  const handleRun = () => {
    if (!htmlRef.current || !cssRef.current || !jsRef.current) return;
    setEditorValues({
      runTime: new Date().getTime(),
      html: htmlRef.current.getValue(),
      css: cssRef.current.getValue(),
      js: jsRef.current.getValue(),
    });
  };

  const handleGetQueryParams = (type, defaultContent) => {
    const p = queryParameters.get(type);
    if (p) return base64ToUtf8(p);
    return defaultContent;
  };

  const handleSetQueryParams = (type, value) => {
    setQueryParams((params) => {
      params.set(type, utf8ToBase64(value));
      return params;
    });
  };

  /*
queryParameters.get("html")
              ? base64ToUtf8(queryParameters.get("html"))
              : html
  */

  return (
    <Container>
      <Header>
        <Tabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value={0} label="HTML" id="simple-tab-0" />
          <Tab value={1} label="CSS" id="simple-tab-1" />
          <Tab value={2} label="JS" id="simple-tab-2" />
        </Tabs>
        <Button
          variant="contained"
          style={{ margin: "0.5rem 0.5rem 0.5rem auto" }}
          onClick={handleRun}
        >
          Run
        </Button>
      </Header>
      <div role="tabpanel" hidden={value !== 0}>
        <Editor
          className="editor"
          defaultLanguage="html"
          defaultValue={(() => handleGetQueryParams("html", html))()}
          onChange={(value) => {
            handleSetQueryParams("html", value);
          }}
          onMount={(editor) => {
            htmlRef.current = editor;
          }}
        />
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        <Editor
          className="editor"
          defaultLanguage="css"
          defaultValue={(() => handleGetQueryParams("css", ""))()}
          onChange={(value) => {
            handleSetQueryParams("css", value);
          }}
          onMount={(editor) => {
            cssRef.current = editor;
          }}
        />
      </div>
      <div role="tabpanel" hidden={value !== 2}>
        <Editor
          className="editor"
          defaultLanguage="javascript"
          defaultValue={(() => handleGetQueryParams("js", ""))()}
          onChange={(value) => {
            handleSetQueryParams("js", value);
          }}
          onMount={(editor) => {
            jsRef.current = editor;
          }}
        />
      </div>
    </Container>
  );
};

export default LeftPanel;
