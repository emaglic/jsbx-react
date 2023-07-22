import React from "react";
import { Button } from "@mui/material";
import { Controls } from "./index.style";

const PanelControls = ({ handlePanelToggle }) => {
  return (
    <Controls>
      <Button
        onClick={() => {
          handlePanelToggle("left");
        }}
      >
        Toggle Left
      </Button>
      <Button
        onClick={() => {
          handlePanelToggle("right");
        }}
      >
        Toggle Right
      </Button>
    </Controls>
  );
};

export default PanelControls;
