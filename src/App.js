import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
import PanelControls from "./components/PanelControls";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        height: "100vh",
      }}
    >
      <Header />
      <BodyContent />
      <PanelControls />
    </div>
  );
}

export default App;
