import React, { useState, useEffect } from "react";
import { Log, Success, Warning, Info, Error } from "./index.style";

const parentWindow = {
  log: window.console.log,
  info: window.console.info,
  success: window.console.success,
  warn: window.console.warn,
  error: window.console.error,
};

const Console = ({ clearConsole }) => {
  const [consoleStatements, setConsoleStatements] = useState([]);

  const handleConsole = (statement) => {
    setConsoleStatements((prev) => [...prev, statement]);
  };

  window.console.log = (...args) => {
    handleConsole({ type: "log", value: args });
    parentWindow.log(...args);
  };

  window.console.info = (...args) => {
    handleConsole({ type: "info", value: args });
    parentWindow.info(...args);
  };

  window.console.success = (...args) => {
    handleConsole({ type: "success", value: args });
    parentWindow.success(...args);
  };

  window.console.warn = (...args) => {
    handleConsole({ type: "warn", value: args });
    parentWindow.warn(...args);
  };

  window.console.error = (...args) => {
    handleConsole({ type: "error", value: args });
    parentWindow.error(...args);
  };

  useEffect(() => {
    setConsoleStatements([]);
  }, [clearConsole]);

  const handleStatement = (statement) => {
    const random = Math.random() * Math.random();
    switch (statement.type) {
      case "log":
        return <Log key={random}>{statement.value.toString()}</Log>;

      case "info":
        return <Info key={random}>{statement.value.toString()}</Info>;

      case "success":
        return <Success key={random}>{statement.value.toString()}</Success>;

      case "warn":
        return <Warning key={random}>{statement.value.toString()}</Warning>;

      case "error":
        return <Error key={random}>{statement.value.toString()}</Error>;
    }
  };

  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      {consoleStatements.map((statement) => handleStatement(statement))}
    </div>
  );
};

export default Console;
