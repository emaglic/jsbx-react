import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  height: "100%",
  overflowY: "hidden",
  overflowX: "hidden",
});

const Header = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const ConsolePanel = styled("div")({
  height: "100%",
  overflowY: "hidden",
  // backgroundColor: "rgba(100, 200, 200, 0.5)",
});

const PreviewPanel = styled("div")({
  // backgroundColor: "rgba(200, 100, 100, 0.5)",
});

const PreviewIframe = styled("iframe")({
  width: "100%",
  height: "100%",
  outline: "0px",
  border: "0px",
  backgroundColor: "#fff",
});

const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  margin: "0 0.5rem 0 auto",
  justifyContent: "center",
  alignItems: "center",
});

export {
  Container,
  Header,
  ConsolePanel,
  PreviewPanel,
  PreviewIframe,
  ButtonContainer,
};
