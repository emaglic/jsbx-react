import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Tabs, Tab, Button } from "@mui/material";
import { Container, Header } from "./index.style";
import { html } from "../../utils/default-content/html";

const LeftPanel = ({ setEditorValues }) => {
  const [value, setValue] = useState(0);

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);

  const handleRun = () => {
    if (!htmlRef.current || !cssRef.current || !jsRef.current) return;
    setEditorValues({
      html: htmlRef.current.getValue(),
      css: cssRef.current.getValue(),
      js: jsRef.current.getValue(),
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
        <Button style={{ marginLeft: "auto" }} onClick={handleRun}>
          Run
        </Button>
      </Header>
      <div role="tabpanel" hidden={value !== 0}>
        <Editor
          className="editor"
          defaultLanguage="html"
          defaultValue={html}
          onMount={(editor) => {
            htmlRef.current = editor;
          }}
        />
      </div>
      <div role="tabpanel" hidden={value !== 1}>
        <Editor
          className="editor"
          defaultLanguage="css"
          defaultValue="// some comment"
          onMount={(editor) => {
            cssRef.current = editor;
          }}
        />
      </div>
      <div role="tabpanel" hidden={value !== 2}>
        <Editor
          className="editor"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={(editor) => {
            jsRef.current = editor;
          }}
        />
      </div>
    </Container>
  );
};

export default LeftPanel;
