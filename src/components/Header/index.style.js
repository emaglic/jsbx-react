import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#000",
  alignItems: "center",
  color: "#fff",
  padding: "0.25rem 0.5rem",
});

const Logo = styled("img")({
  height: "25px",
  width: "25px",
  marginRight: "0.25rem",
});

const LogoText = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Text = styled("p")({
  margin: "0",
  // fontFamily: "Permanent-Marker",
  fontFamily: "Eczar",
  marginLeft: "0.25rem",
  fontSize: "1.25rem",
  letterSpacing: "0px",
});

const HeaderMenu = styled("div")({
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
});

export { StyledHeader, Logo, LogoText, Text, HeaderMenu };
