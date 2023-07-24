import React from "react";
import { Button, IconButton } from "@mui/material";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Controls } from "./index.style";

const PanelControls = ({ handlePanelToggle, panelState }) => {
  return (
    <Controls>
      <Button
        onClick={() => {
          handlePanelToggle("right");
        }}
      >
        TOGGLE LEFT
      </Button>
      <Button
        onClick={() => {
          handlePanelToggle("left");
        }}
      >
        TOGGLE RIGHT
      </Button>
    </Controls>
  );
};

export default PanelControls;
