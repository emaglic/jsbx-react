import React, { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import {
  Tabs,
  Tab,
  IconButton,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
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
import { updateJSSuperset } from "../../store/slices/editor-slice";
import { handleSetQueryParams } from "../../utils/query-params";

const LeftPanel = () => {
  const code = useSelector((state) => state.editor);
  const importTimestamp = useSelector(
    (state) => state.ui.importProjectTimestamp
  );
  const jsSuperset = useSelector((state) => state.editor.jsSuperset);
  const activeTab = useSelector((state) => state.ui.leftActiveTab);

  const dispatch = useDispatch();

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);

  const [queryParams, setQueryParams] = useSearchParams();

  const [jsMonacoObj, setJSMonacoObj] = useState(undefined);
  const [jsSnackbarOpen, setJSSnackbarOpen] = useState(false);

  useEffect(() => {
    if (htmlRef.current && cssRef.current && jsRef.current) {
      htmlRef.current.setValue(code.html);
      cssRef.current.setValue(code.css);
      jsRef.current.setValue(code.js);
    }
  }, [importTimestamp]);

  const configureTypeScript = (monaco) => {
    if (jsSuperset === "typescript") {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.React, // Enable JSX
        allowJs: true,
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        noImplicitAny: true, // Enable noImplicitAny
      });
    }
  };

  useEffect(() => {
    if (jsSuperset === "typescript") setJSSnackbarOpen(true);
    if (!jsRef.current?.getModel() || !jsMonacoObj) return;
    const model = jsRef.current.getModel();
    jsMonacoObj.editor.setModelLanguage(model, jsSuperset);
    configureTypeScript(jsMonacoObj);
  }, [jsSuperset, jsMonacoObj]);

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
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {activeTab === "js" && (
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jsSuperset}
                size="small"
                onChange={(evt) => {
                  dispatch(updateJSSuperset(evt.target.value));
                  handleSetQueryParams(
                    setQueryParams,
                    "jssuperset",
                    evt.target.value
                  );
                }}
              >
                <MenuItem value={"javascript"}>Javascript</MenuItem>
                <MenuItem value={"typescript"}>Typescript</MenuItem>
              </Select>
              <Snackbar
                open={jsSnackbarOpen}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                onClose={() => {
                  setJSSnackbarOpen(false);
                }}
              >
                <Alert
                  onClose={() => {
                    setJSSnackbarOpen(false);
                  }}
                  severity="warning"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Using Typescript requires linking Babel via CDN in HTML
                </Alert>
              </Snackbar>
            </FormControl>
          )}
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
        </Box>
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
            defaultLanguage={jsSuperset} // Dynamically set initial language
            path="file.tsx" // Use .tsx extension to help Monaco understand JSX syntax
            theme="vs-dark"
            defaultValue={code.js}
            onChange={(value) => {
              dispatch(updateJS(value));
              handleSetQueryParams(setQueryParams, "js", value);
            }}
            onMount={(editor, monaco) => {
              jsRef.current = editor;
              setJSMonacoObj(monaco);

              // Apply TypeScript-specific configuration if needed
              configureTypeScript(monaco);
            }}
          />
        </div>
      </Section>
    </Container>
  );
};

export default LeftPanel;
