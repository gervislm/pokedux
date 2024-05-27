import React from "react";
import ReactDOM from "react-dom/client";
import { pokemonReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(pokemonReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
