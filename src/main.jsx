import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { VideoPopupProvider } from "./util/VideoPopupContext.jsx";
import {ScrollProvider } from "./util/ScrollContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <VideoPopupProvider>
          <App />
        </VideoPopupProvider>
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
