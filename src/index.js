import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { ProvideAuth } from "./router-helper";
import Providers from "./providers";

ReactDOM.render(
  <Providers>
    <Provider store={store}>
      <ProvideAuth>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProvideAuth>
    </Provider>
  </Providers>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
