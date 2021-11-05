import React from "react";
import ReactDOM from "react-dom";
import { CustomProvider } from "rsuite";
import { Provider } from "react-redux";
import App from "./App";

import store from "./state/store";
import "rsuite/dist/rsuite.min.css";

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <Provider store={store}>
        <App />
      </Provider>
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
