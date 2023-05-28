import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleWare, combineReducers, createStore, compose } from "redux";

import { userReducer } from "./userReducer";
import { loadState, saveState } from "./loadState";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const persistedState = loadState();
const reducers = combineReducers({
  userReducer: userReducer
});

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
