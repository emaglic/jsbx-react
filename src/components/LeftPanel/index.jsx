import React, { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab, IconButton } from "@mui/material";
import { Container, Header, Section, ButtonContainer } from "./index.style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHTML,
  updateCSS,
  updateJS,
  updateRunTimestamp,
} from "../../store/slices/editor-slice";
import { setLeftActiveTab } from "../../store/slices/ui-slice";
import { handleSetQueryParams } from "../../utils/query-params";

const LeftPanel = () => {
  const code = useSelector((state) => state.editor);
  const importTimestamp = useSelector(
    (state) => state.ui.importProjectTimestamp
  );
  const activeTab = useSelector((state) => state.ui.leftActiveTab);

  const dispatch = useDispatch();

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);

  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    if (htmlRef.current && cssRef.current && jsRef.current) {
      htmlRef.current.setValue(code.html);
      cssRef.current.setValue(code.css);
      jsRef.current.setValue(code.js);
    }
  }, [importTimestamp]);

  return (
    <Container>
      <Header>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => {
            dispatch(setLeftActiveTab(newValue));
            handleSetQueryParams(setQueryParams, "lefttab", newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="html" label="HTML" id="simple-tab-0" />
          <Tab value="css" label="CSS" id="simple-tab-1" />
          <Tab value="js" label="JS" id="simple-tab-2" />
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
        </ButtonContainer>
      </Header>
      <Section>
        <div
          role="tabpanel"
          hidden={activeTab !== "html"}
          style={{ height: "100%" }}
        >
          <Editor
            className="editor"
            defaultLanguage="html"
            theme="vs-dark"
            defaultValue={code.html}
            onChange={(value) => {
              dispatch(updateHTML(value));
              handleSetQueryParams(setQueryParams, "html", value);
            }}
            onMount={(editor) => {
              htmlRef.current = editor;
            }}
          />
        </div>
        <div
          role="tabpanel"
          hidden={activeTab !== "css"}
          style={{ height: "100%" }}
        >
          <Editor
            className="editor"
            defaultLanguage="css"
            theme="vs-dark"
            defaultValue={code.css}
            onChange={(value) => {
              dispatch(updateCSS(value));
              handleSetQueryParams(setQueryParams, "css", value);
            }}
            onMount={(editor) => {
              cssRef.current = editor;
            }}
          />
        </div>
        <div
          role="tabpanel"
          hidden={activeTab !== "js"}
          style={{ height: "100%" }}
        >
          <Editor
            className="editor"
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue={code.js}
            onChange={(value) => {
              dispatch(updateJS(value));
              handleSetQueryParams(setQueryParams, "js", value);
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
