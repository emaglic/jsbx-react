import React, { useState, useEffect } from "react";
import { Log, Success, Warning, Info, Error, Pre } from "./index.style";

window.childConsole = {};

const parentWindow = {
  log: window.console.log,
  info: window.console.info,
  warn: window.console.warn,
  error: window.console.error,
};

const Console = ({ clearConsole }) => {
  const [consoleStatements, setConsoleStatements] = useState([]);

  const handleConsole = (statement) => {
    setConsoleStatements((prev) => [...prev, statement]);
  };

  const parseArgs = (args) => {
    return args.map((arg) => {
      if(typeof arg === "object") return JSON.stringify(arg, null, 2);
      return arg;
    }).join('')
  }

  window.childConsole.log = (...args) => {
    handleConsole({ type: "log", value: parseArgs(args) });
    parentWindow.log(...args);
  };

  window.childConsole.info = (...args) => {
    handleConsole({ type: "info", value: parseArgs(args) });
    parentWindow.info(...args);
  };

  window.childConsole.warn = (...args) => {
    handleConsole({ type: "warn", value: parseArgs(args) });
    parentWindow.warn(...args);
  };

  window.childConsole.error = (...args) => {
    handleConsole({ type: "error", value: parseArgs(args) });
    parentWindow.error(...args);
  };

  useEffect(() => {
    setConsoleStatements([]);
  }, [clearConsole]);

  const handleStatement = (statement) => {
    const value = statement.value;
    const random = Math.random() * Math.random();
    switch (statement.type) {
      case "log":
        return <Log key={random}>{value}</Log>;

      case "info":
        return <Info key={random}>{value}</Info>;

      case "success":
        return <Success key={random}>{value}</Success>;

      case "warn":
        return <Warning key={random}>{value}</Warning>;

      case "error":
        return <Error key={random}>{value}</Error>;
    }
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        backgroundColor: "rgb(30, 30, 30)",
      }}
    >
      <Pre>
        {consoleStatements.map((statement) => handleStatement(statement))}
      </Pre>
    </div>
  );
};

export default Console;
