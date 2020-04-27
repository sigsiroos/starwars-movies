import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./components/App";
import FilmsProvider from "./providers/FilmsProvider";

const ProvidedApp = () => (
    <FilmsProvider>
        <App />
    </FilmsProvider>
);

ReactDOM.render(<ProvidedApp />, document.getElementById("root"));
