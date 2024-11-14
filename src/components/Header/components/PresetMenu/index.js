import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
  ListSubheader,
  Paper,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
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
import presets from "./presets";

const ExtraMenu = ({ editorValues, importProject }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = (url) => {
    window.location.href = url;
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
        <ListIcon />
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
          JSBX PRESETS
        </ListSubheader>
        {presets.map((preset) => (
          <MenuItem
            onClick={() => {
              navigate(preset.url);
            }}
            key={preset.label}
          >
            {preset.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ExtraMenu;
