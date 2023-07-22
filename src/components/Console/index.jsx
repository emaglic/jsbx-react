import React, { useState, useEffect } from "react";
import { Log, Success, Warning, Info, Error } from "./index.style";

const Console = ({ clearConsole }) => {
  const [consoleStatements, setConsoleStatements] = useState([]);

  const handleConsole = (statement) => {
    setConsoleStatements((prev) => [...prev, statement]);
  };

  window.console.log = (...args) => {
    handleConsole({ type: "log", value: args });
  };

  window.console.info = (...args) => {
    handleConsole({ type: "info", value: args });
  };

  window.console.success = (...args) => {
    handleConsole({ type: "success", value: args });
  };

  window.console.warn = (...args) => {
    handleConsole({ type: "warn", value: args });
  };

  window.console.error = (...args) => {
    handleConsole({ type: "error", value: args });
  };

  useEffect(() => {
    setConsoleStatements([]);
  }, [clearConsole]);

  const handleStatement = (statement) => {
    switch (statement.type) {
      case "log":
        return <Log>{statement.value.toString()}</Log>;

      case "info":
        return <Info>{statement.value.toString()}</Info>;

      case "success":
        return <Success>{statement.value.toString()}</Success>;

      case "warn":
        return <Warning>{statement.value.toString()}</Warning>;

      case "error":
        return <Error>{statement.value.toString()}</Error>;
    }
  };

  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      {consoleStatements.map((statement) => handleStatement(statement))}
    </div>
  );
};

export default Console;
