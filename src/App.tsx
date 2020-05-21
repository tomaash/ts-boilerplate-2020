import React from "react";
import logo from "~/logo.svg";
import "~/App.css";
import { Button } from "antd";
import { Thing } from "~/components/thing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-purple-500 par">
          Edit <code>src/App.tsx</code> and save to reload.
          <p className="nest">xxx</p>
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button type="primary">Antd button</Button>
        <Thing />
      </header>
    </div>
  );
}

export default App;
