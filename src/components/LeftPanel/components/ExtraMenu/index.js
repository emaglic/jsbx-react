import React, { useState } from "react";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { utf8ToBase64, base64ToUtf8 } from "../../../../utils/base64Converter";
const ExtraMenu = ({ editorValues, importProject }) => {
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
    input.type = "file";
    input.onchange = (changeEvt) => {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        console.log(loadEvt.target.result);
        importProject(loadEvt.target.result);
      };
      reader.readAsText(changeEvt.target.files[0]);
    };
    input.click();
  };

  const exportHandler = async () => {
    const { html, css, js } = editorValues;
    console.log(editorValues);
    const obj = {
      html: utf8ToBase64(html),
      css: utf8ToBase64(css),
      js: utf8ToBase64(js),
    };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.download = "jsbx-project.json";
    a.href = URL.createObjectURL(blob);
    a.addEventListener("click", (e) => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
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
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={importHandler}>Import Project</MenuItem>
        <MenuItem onClick={exportHandler}>Export Project</MenuItem>
      </Menu>
    </div>
  );
};

export default ExtraMenu;
