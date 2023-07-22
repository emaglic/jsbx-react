import React from "react";
import { Button } from "@mui/material";
import { Controls } from "./index.style";

const PanelControls = () => {
  return (
    <Controls>
      <Button>Toggle Left</Button>
      <Button>Toggle Right</Button>
    </Controls>
  );
};

export default PanelControls;
