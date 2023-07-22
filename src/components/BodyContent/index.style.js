import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const Container = styled("div")((props) => {
  const { left, right } = props.panelState;
  console.log("left: ", left);
  console.log("right: ", right);
  return {
    display: "grid",
    gridTemplateColumns: !left || !right ? "1fr" : "1fr 1fr",
    gridTemplateRows: "1fr auto",
    overflowY: "hidden",
  };
});

export { Container };
