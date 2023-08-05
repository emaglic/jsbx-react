import React, { useEffect } from "react";
import { handleGetQueryParams } from "../../utils/query-params";
import { useDispatch } from "react-redux";
import {
  updateHTML,
  updateCSS,
  updateJS,
} from "../../store/slices/editor-slice";
import {
  setLeftActiveTab,
  setRightActiveTab,
} from "../../store/slices/ui-slice";
import { useSearchParams } from "react-router-dom";
import html from "../../utils/default-content/html";
import js from "../../utils/default-content/js";
import css from "../../utils/default-content/css";

const Main = (props) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHTML(handleGetQueryParams(queryParams, "html", html)));
    dispatch(updateCSS(handleGetQueryParams(queryParams, "css", css)));
    dispatch(updateJS(handleGetQueryParams(queryParams, "js", js)));
    dispatch(
      setLeftActiveTab(handleGetQueryParams(queryParams, "lefttab", "html"))
    );
    dispatch(
      setRightActiveTab(
        handleGetQueryParams(queryParams, "righttab", "console")
      )
    );
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Main;
