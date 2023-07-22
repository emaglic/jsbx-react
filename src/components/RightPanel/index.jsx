import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import {
  Container,
  Header,
  ConsolePanel,
  PreviewPanel,
  PreviewIframe,
} from "./index.style";
import Console from "../Console";
import createWindow from "../../utils/create-window";

const RightPanel = ({ editorValues }) => {
  const [value, setValue] = useState(0);
  const [iframeKey, setIframeKey] = useState(new Date().getTime());
  const iframeRef = useRef();
  const [forceUpdateConsole, setForceUpdateConsole] = useState(false);

  useEffect(() => {
    setIframeKey(new Date().getTime());
  }, [editorValues]);

  useEffect(() => {
    createWindow(iframeRef, editorValues);
  }, [iframeKey]);

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
          <Tab value={0} label="Console" id="simple-tab-0" />
          <Tab value={1} label="Preview" id="simple-tab-1" />
        </Tabs>
        {value === 0 ? (
          <Button
            variant="contained"
            style={{ margin: "0.5rem 0.5rem 0.5rem auto" }}
            onClick={() => {
              setForceUpdateConsole(!forceUpdateConsole);
            }}
          >
            Clear
          </Button>
        ) : (
          <></>
        )}
      </Header>
      <ConsolePanel role="tabpanel" hidden={value !== 0}>
        <Console clearConsole={forceUpdateConsole} />
      </ConsolePanel>
      <PreviewPanel role="tabpanel" hidden={value !== 1}>
        <PreviewIframe key={iframeKey} ref={iframeRef}></PreviewIframe>
      </PreviewPanel>
    </Container>
  );
};

export default RightPanel;
