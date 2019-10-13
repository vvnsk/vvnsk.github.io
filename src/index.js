import React from "react";
import * as Sentry from "@sentry/browser";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: "https://5348fb458ee34849adf787fbae83067c@sentry.io/1777884"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
