import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflowX: "hidden",
});

const Header = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  //justifyContent: "space-around",
});

const Section = styled("div")({
  flexGrow: 1,
});

export { Container, Header, Section };
