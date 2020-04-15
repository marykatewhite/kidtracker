import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import M from 'materialize-css';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
