import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab, Button, IconButton } from "@mui/material";
import { Container, Header, Section, ButtonContainer } from "./index.style";
import html from "../../utils/default-content/html";
import js from "../../utils/default-content/js";
import css from "../../utils/default-content/css";
import { utf8ToBase64, base64ToUtf8 } from "../../utils/base64Converter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ExtraMenu from "./components/ExtraMenu";

import { useDispatch, useSelector } from "react-redux";
import {
  updateHTML,
  updateCSS,
  updateJS,
  updateRunTimestamp,
} from "../../store/slices/code-slice";

const LeftPanel = () => {
  const code = useSelector((state) => state.code);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);

  const [queryParameters, setQueryParams] = useSearchParams();

  const importProject = (data) => {
    if (htmlRef.current && cssRef.current && jsRef.current) {
      htmlRef.current.setValue(data.html);
      cssRef.current.setValue(data.css);
      jsRef.current.setValue(data.js);
    }
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

  useEffect(() => {
    dispatch(updateHTML(handleGetQueryParams("html", html)));
    dispatch(updateCSS(handleGetQueryParams("css", css)));
    dispatch(updateJS(handleGetQueryParams("js", js)));
  }, []);

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
          <IconButton
            variant="contained"
            onClick={() => {
              dispatch(updateRunTimestamp());
            }}
            color="success"
          >
            <PlayArrowIcon />
          </IconButton>

          <ExtraMenu importProject={importProject} />
        </ButtonContainer>
      </Header>
      <Section>
        <div role="tabpanel" hidden={value !== 0} style={{ height: "100%" }}>
          <Editor
            className="editor"
            defaultLanguage="html"
            theme="vs-dark"
            defaultValue={code.html}
            onChange={(value) => {
              dispatch(updateHTML(value));
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
            defaultValue={code.css}
            onChange={(value) => {
              dispatch(updateCSS(value));
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
            defaultValue={code.js}
            onChange={(value) => {
              dispatch(updateJS(value));
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
