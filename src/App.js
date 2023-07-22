import Header from "./components/Header";
import BodyContent from "./components/BodyContent";

function App() {
  return (
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
  );
}

export default App;
