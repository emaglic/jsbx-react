import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const Container = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  overflowY: "hidden",
});

export { Container };
