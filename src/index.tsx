import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import { ResourcesHelper } from "./ResourcesHelper";
import StoreContext from "storeon/react/context";
import { store } from "./Store";

ReactDOM.render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <ResourcesHelper />
    </StoreContext.Provider>
  </StrictMode>,
  document.getElementById("root")
);
