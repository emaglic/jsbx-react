import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
});

const Header = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export { Container, Header };
