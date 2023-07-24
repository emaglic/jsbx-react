import React, { useState, useEffect } from "react";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import PanelControls from "../PanelControls";
import { Container } from "./index.style";

const BodyContent = () => {
  const [panelState, setPanelState] = useState({ left: true, right: true });
  const [editorValues, setEditorValues] = useState({
    runTime: null,
    html: "",
    css: "",
    js: "",
  });

  const getEditorValues = (values) => {
    setEditorValues(values);
  };

  const handlePanelToggle = (which) => {
    if (which === "left") {
      setPanelState((prev) => {
        return { ...prev, left: !prev.left };
      });
    }
    if (which === "right") {
      setPanelState((prev) => {
        return { ...prev, right: !prev.right };
      });
    }
  };

  const importProject = (content) => {
    console.log("content: ", content);
  };

  const getStyle = () => {
    if (!panelState.right && !panelState.left) return "50% 50%";
    if (!panelState.right) {
      return "0 100%";
    }
    if (!panelState.left) {
      return "100% 0%";
    }
    return "50% 50%";
  };

  return (
    <>
      <Container sx={{ gridTemplateColumns: `${getStyle()}` }}>
        <LeftPanel
          setEditorValues={getEditorValues}
          editorValues={editorValues}
          importProject={importProject}
        />
        <RightPanel editorValues={editorValues} />
      </Container>
      <PanelControls
        handlePanelToggle={handlePanelToggle}
        panelState={panelState}
      />
    </>
  );
};

export default BodyContent;
