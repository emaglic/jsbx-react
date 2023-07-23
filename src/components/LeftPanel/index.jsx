import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab, Button } from "@mui/material";
import { Container, Header, Section, ButtonContainer } from "./index.style";
import html from "../../utils/default-content/html";
import js from "../../utils/default-content/js";
import css from "../../utils/default-content/css";
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
        <ButtonContainer>
          <Button variant="contained" onClick={handleRun}>
            Run
          </Button>
        </ButtonContainer>
      </Header>
      <Section>
        <div role="tabpanel" hidden={value !== 0} style={{ height: "100%" }}>
          <Editor
            className="editor"
            defaultLanguage="html"
            theme="vs-dark"
            defaultValue={(() => handleGetQueryParams("html", html))()}
            onChange={(value) => {
              handleSetQueryParams("html", value);
            }}
            onMount={(editor) => {
              htmlRef.current = editor;
            }}
          />
        </div>
        <div role="tabpanel" hidden={value !== 1} style={{ height: "100%" }}>
          <Editor
            className="editor"
            defaultLanguage="css"
            theme="vs-dark"
            defaultValue={(() => handleGetQueryParams("css", css))()}
            onChange={(value) => {
              handleSetQueryParams("css", value);
            }}
            onMount={(editor) => {
              cssRef.current = editor;
            }}
          />
        </div>
        <div role="tabpanel" hidden={value !== 2} style={{ height: "100%" }}>
          <Editor
            className="editor"
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue={(() => handleGetQueryParams("js", js))()}
            onChange={(value) => {
              handleSetQueryParams("js", value);
            }}
            onMount={(editor) => {
              jsRef.current = editor;
            }}
          />
        </div>
      </Section>
    </Container>
  );
};

export default LeftPanel;
