import React, { useState, useEffect } from "react";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import PanelControls from "../PanelControls";
import { Container } from "./index.style";
import { setPanelState } from "../../store/slices/ui-slice";
import {
  handleGetQueryParams,
  handleSetQueryParams,
} from "../../utils/query-params";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const BodyContent = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const panelState = useSelector((state) => state.ui.panelState);
  const dispatch = useDispatch();
  // const [panelState, setPanelState] = useState({ left: true, right: true });
  const [runTimestamp, setRunTimestamp] = useState(0);

  const handlePanelToggle = (which) => {
    let newState = panelState;
    if (which === "left") {
      newState = { ...panelState, right: !panelState.right };
    }
    if (which === "right") {
      newState = { ...panelState, left: !panelState.left };
    }
    console.log("newState: ", newState);
    dispatch(setPanelState(newState));
    handleSetQueryParams(
      setQueryParams,
      "panelState",
      JSON.stringify(newState)
    );
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

  useEffect(() => {
    const query = handleGetQueryParams(queryParams, "panelState", null);
    const pState = query ? JSON.parse(query) : { left: true, right: true };
    dispatch(setPanelState(pState));
  }, []);

  return (
    <>
      <Container sx={{ gridTemplateColumns: `${getStyle()}` }}>
        <LeftPanel />
        <RightPanel runTimestamp={runTimestamp} />
      </Container>
      <PanelControls
        handlePanelToggle={handlePanelToggle}
        panelState={panelState}
      />
    </>
  );
};

export default BodyContent;
