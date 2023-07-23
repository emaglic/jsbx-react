import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
import Eczar from "./fonts/Eczar-Bold.ttf";
import PermanentMarker from "./fonts/permanent-marker.woff2";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Eczar",
      "Permanent-Marker",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Eczar';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: url(${Eczar}) format('woff2')
        }
        @font-face {
          font-family: 'Permanent-Marker';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: url(${PermanentMarker}) format('woff2')
        }
        `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr",
          height: "100vh",
        }}
      >
        <Header />
        <BodyContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
