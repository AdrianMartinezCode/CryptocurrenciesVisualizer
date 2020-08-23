import * as React from "react";
import "./styles.css";
import { GlobalStateProvider, useGlobalState } from "./state/GlobalState";

export default function App() {
  const [state, dispatch] = useGlobalState();
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>THIS IS YOUR API KEY: {state?.apiKey}</h3>
      </div>
    </GlobalStateProvider>
  );
}
