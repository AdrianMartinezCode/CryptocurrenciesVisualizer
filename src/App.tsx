import * as React from "react";
import "./styles.css";
import { AppState, initialAppState } from "./store/State";
import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import { useSelector } from "react-redux";
import { rootReducer } from "./store/Reducers";
import { GlobalStateProvider } from "./state/GlobalState";

export default function App() {
  //const [state] = useGlobalState();
  //const store = React.createStore(appReducer);

  //const store = React.createStore<AppState>(rootReducer, initialAppState);

  const apiKey = useSelector<AppState>((state) => state.apiKey);
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>THIS IS YOUR API KEY: {apiKey}</h3>
      </div>
    </GlobalStateProvider>
  );
}
