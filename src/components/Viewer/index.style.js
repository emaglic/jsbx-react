import { styled } from "@mui/material/styles";

const ViewerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
});

const ViewerIframe = styled("iframe")({
  width: "100%",
  height: "100%",
  outline: "0px",
  border: "0px",
  backgroundColor: "#fff",
});

export { ViewerContainer, ViewerIframe };
