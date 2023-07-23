import { styled } from "@mui/material/styles";
import { green, red, blue, orange } from "@mui/material/colors";

const statement = {
  padding: "0.75rem 0.5rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
  fontFamily: `Consolas, "Courier New", monospace`,
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Log = styled("div")({
  ...statement,
  color: "rgba(255, 255, 255, 0.85)",
});

const Error = styled("div")({
  ...statement,
  color: red[500],
});

const Warning = styled("div")({
  ...statement,
  color: orange[500],
});

const Info = styled("div")({
  ...statement,
  color: blue[500],
});

const Success = styled("div")({
  ...statement,
  color: green[500],
});

const Pre = styled("pre")({
  margin: "0",
});

export { Log, Error, Warning, Info, Success, Pre };
