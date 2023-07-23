import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const Container = styled("div")((props) => {
  return {
    display: "grid",
    // gridTemplateColumns: "1fr 1fr",
    transition: "grid-template-columns 0.4s ease-in",
    gridTemplateRows: "1fr auto",
    overflowY: "hidden",
  };
});

export { Container };
