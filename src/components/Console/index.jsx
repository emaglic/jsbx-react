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

  const handleValue = (value) => {
    if (typeof value === "object") return JSON.stringify(...value, null, 2);
    return value.toString();
  };

  const handleStatement = (statement) => {
    const value = statement.value;
    const random = Math.random() * Math.random();
    switch (statement.type) {
      case "log":
        return <Log key={random}>{handleValue(value)}</Log>;

      case "info":
        return <Info key={random}>{handleValue(value)}</Info>;

      case "success":
        return <Success key={random}>{handleValue(value)}</Success>;

      case "warn":
        return <Warning key={random}>{handleValue(value)}</Warning>;

      case "error":
        return <Error key={random}>{handleValue(value)}</Error>;
    }
  };

  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      {consoleStatements.map((statement) => handleStatement(statement))}
    </div>
  );
};

export default Console;
