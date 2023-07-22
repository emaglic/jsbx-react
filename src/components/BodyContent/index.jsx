import React, { useState, useEffect } from "react";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import { Container } from "./index.style";

const BodyContent = () => {
  const [editorValues, setEditorValues] = useState({
    html: "",
    css: "",
    js: "",
  });

  const getEditorValues = (values) => {
    setEditorValues(values);
  };

  return (
    <Container>
      <LeftPanel setEditorValues={getEditorValues} />
      <RightPanel editorValues={editorValues} />
    </Container>
  );
};

export default BodyContent;
