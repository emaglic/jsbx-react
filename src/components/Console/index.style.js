import { styled } from "@mui/material/styles";

const statement = {
  padding: "0.5rem",
  borderBottom: "1px solid #000",
};

const Log = styled("div")({
  ...statement,
  color: "#000",
});

const Error = styled("div")({
  ...statement,
  color: "red",
});

const Warning = styled("div")({
  ...statement,
  color: "orange",
});

const Info = styled("div")({
  ...statement,
  color: "blue",
});

const Success = styled("div")({
  ...statement,
  color: "green",
});

export { Log, Error, Warning, Info, Success };
