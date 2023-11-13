import React, { createContext, useReducer } from "react";
import { useReducer } from "./Reducer";
export const ProviderContext = createContext();
export default function Provider({ children }) {
  const initialState = {
    loading: false,
  };
  const [state, dispatch] = Reducer(Reducer, initialState);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}