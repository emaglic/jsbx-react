import { styled } from "@mui/material/styles";

const header = {
  padding: "0.75rem 0.5rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
  fontFamily: `Consolas, "Courier New", monospace`,
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const DialogBody = styled("div")({
    margin: '1rem'
  });

const DialogHeader = styled("div")({
  color: "rgba(255, 255, 255, 0.85)",
});


export { DialogHeader, DialogBody };
