"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

type ReduxProviderType = {
  children: ReactNode;
};

function ReduxProvider({ children }: ReduxProviderType) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
