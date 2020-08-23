import * as React from "react";
import "./styles.css";
import { GlobalStateProvider, useGlobalState } from "./state/GlobalState";
import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";

export default function App() {
  const [state] = useGlobalState();
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>
          THIS IS YOUR API KEY:{" "}
          {pipe(
            state,
            O.fold(
              () => "NOT DEFINED",
              (state) => state.apiKey
            )
          )}
        </h3>
      </div>
    </GlobalStateProvider>
  );
}
