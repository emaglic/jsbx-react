import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#000",
  alignItems: "center",
  color: "#fff",
  padding: "1rem 0.5rem",
});

const Logo = styled("img")({
  maxHeight: "22px",
  width: "auto",
  marginRight: "0.25rem",
});

const LogoText = styled("div")({
  fontFamily: "Eczar",
  fontSize: "14px",
});

export { StyledHeader, Logo, LogoText };
