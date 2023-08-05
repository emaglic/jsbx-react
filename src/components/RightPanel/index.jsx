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
import { setRightActiveTab } from "../../store/slices/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { handleSetQueryParams } from "../../utils/query-params";

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
