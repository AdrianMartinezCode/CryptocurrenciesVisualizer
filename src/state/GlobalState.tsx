import * as React from "react";
import * as O from "fp-ts/lib/Option";
import { Option } from "fp-ts/lib/Option";

export type AppState = {
  apiKey: string;
};

export const initialAppState = {
  apiKey: "XXXXX"
};

export const globalStateContext = React.createContext(O.some(initialAppState));
export const dispatchStateContext = React.createContext(O.none);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state: AppState, newValue) => ({ ...state, ...newValue }),
    initialAppState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];
