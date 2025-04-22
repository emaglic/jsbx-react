import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tabs, Tab, Button, IconButton } from "@mui/material";

import {
  Container,
  Header,
  ConsolePanel,
  PreviewPanel,
  PreviewIframe,
  ButtonContainer,
} from "./index.style";
import Console from "../Console";
import createWindow from "../../utils/create-window";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { setRightActiveTab } from "../../store/slices/ui-slice";
import { updateHTMLPage } from "../../store/slices/editor-slice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { handleSetQueryParams } from "../../utils/query-params";
import { utf8ToBase64, base64ToUtf8 } from "../../utils/base64Converter";
import constructViewerURL from "../../utils/construct-viewer-url";

const RightPanel = () => {
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();
  const code = useSelector((state) => state.editor);
  const activeTab = useSelector((state) => state.ui.rightActiveTab);
  const iframeRef = useRef();
  const [forceUpdateConsole, setForceUpdateConsole] = useState(false);

  useEffect(() => {
    createWindow(iframeRef, code);
  }, [code.runTimestamp]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        iframeRef?.current?.contentWindow?.document?.documentElement.outerHTML
      ) {
        const htmlStr =
          iframeRef?.current?.contentWindow?.document?.documentElement
            .outerHTML;
        dispatch(updateHTMLPage(htmlStr));
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [iframeRef?.current?.contentWindow?.document?.lastModified]);

  return (
    <Container>
      <Header>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => {
            dispatch(setRightActiveTab(newValue));
            handleSetQueryParams(setQueryParams, "righttab", newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value={"console"} label="Console" id="simple-tab-0" />
          <Tab value={"preview"} label="Preview" id="simple-tab-1" />
        </Tabs>
        {activeTab === "preview" ? (
          <ButtonContainer>
            <IconButton
              variant="contained"
              color="primary"
              component="a"
              href={constructViewerURL(code)}
              target="_blank"
            >
              <OpenInNewIcon />
            </IconButton>
          </ButtonContainer>
        ) : (
          <></>
        )}
        {activeTab === "console" ? (
          <ButtonContainer>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={() => {
                setForceUpdateConsole(!forceUpdateConsole);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ButtonContainer>
        ) : (
          <></>
        )}
      </Header>
      <ConsolePanel role="tabpanel" hidden={activeTab !== "console"}>
        <Console clearConsole={forceUpdateConsole} />
      </ConsolePanel>
      <PreviewPanel role="tabpanel" hidden={activeTab !== "preview"}>
        <PreviewIframe key={code.runTimestamp} ref={iframeRef}></PreviewIframe>
      </PreviewPanel>
    </Container>
  );
};

export default RightPanel;
