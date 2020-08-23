import * as React from "react";

export type AppState = {
  apiKey: string;
};

export const initialAppState = {
  apiKey: "XXXXX"
};

export const globalStateContext = React.createContext(initialAppState);
export const dispatchStateContext = React.createContext(undefined);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
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
