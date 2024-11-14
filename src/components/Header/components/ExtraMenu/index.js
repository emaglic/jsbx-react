import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
  ListSubheader,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SaveIcon from "@mui/icons-material/Save";
import { utf8ToBase64, base64ToUtf8 } from "../../../../utils/base64Converter";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHTML,
  updateCSS,
  updateJS,
} from "../../../../store/slices/editor-slice";

import {
  setImportProjectTimestamp,
  setLeftActiveTab,
  setRightActiveTab,
  setPanelState,
} from "../../../../store/slices/ui-slice";
import { compiledHTMLFile } from "../../../../utils/save-compiled-html";

const ExtraMenu = ({ editorValues, importProject }) => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.editor);
  const ui = useSelector((state) => state.ui);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const importHandler = () => {
    const input = document.createElement("input");
    input.accept = ".jsbx";
    input.type = "file";
    input.onchange = (changeEvt) => {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        const json = JSON.parse(loadEvt.target.result);
        const result = {
          html: base64ToUtf8(json.html),
          css: base64ToUtf8(json.css),
          js: base64ToUtf8(json.js),
          leftActiveTab: base64ToUtf8(json.leftActiveTab),
          rightActiveTab: base64ToUtf8(json.rightActiveTab),
          panelState: base64ToUtf8(json.panelState),
        };

        dispatch(updateHTML(result.html));
        dispatch(updateCSS(result.css));
        dispatch(updateJS(result.js));

        if (result.leftActiveTab)
          dispatch(setLeftActiveTab(result.leftActiveTab));
        if (result.rightActiveTab)
          dispatch(setRightActiveTab(result.rightActiveTab));
        if (result.panelState) dispatch(setPanelState(result.panelState));

        // Fix: Don't use setTimeout to update setImportProjectTimestamp
        setTimeout(() => {
          dispatch(setImportProjectTimestamp());
        }, 500);
      };

      reader.readAsText(changeEvt.target.files[0]);
    };
    input.click();
  };

  const exportHandler = async () => {
    const { html, css, js } = code;
    const { leftActiveTab, rightActiveTab, panelState } = ui;
    const obj = {
      note: "Everything here is base64 encoded",
      html: utf8ToBase64(html),
      css: utf8ToBase64(css),
      js: utf8ToBase64(js),
      leftActiveTab: utf8ToBase64(leftActiveTab),
      rightActiveTab: utf8ToBase64(rightActiveTab),
      panelState: utf8ToBase64(panelState),
    };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    downloadFile(blob, "jsbx-project", "jsbx");
  };

  const exportAsHTMLFile = () => {
    dispatch(setImportProjectTimestamp());
    const result = code.htmlPage;
    const blob = new Blob([result], {
      type: "text/html",
    });
    downloadFile(blob, "jsbx-compiled-html", "html");
  };

  const downloadFile = (blob, filename, extension) => {
    const a = document.createElement("a");
    a.download = `${filename}.${extension}`;
    a.href = URL.createObjectURL(blob);
    a.onClick = () => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    };
    a.click();
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SaveIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: { border: "1px solid #fff" },
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            paddingTop: 0,
          },
        }}
      >
        <ListSubheader
          sx={{
            backgroundColor: "#000",
            color: "rgba(255,255,255,0.7)",
            lineHeight: "2.5rem",
          }}
        >
          MANAGE PROJECT
        </ListSubheader>
        <MenuItem onClick={importHandler}>Import Project</MenuItem>
        <MenuItem onClick={exportHandler}>Export Project</MenuItem>
        <MenuItem onClick={exportAsHTMLFile}>Save as HTML</MenuItem>
      </Menu>
    </div>
  );
};

export default ExtraMenu;
