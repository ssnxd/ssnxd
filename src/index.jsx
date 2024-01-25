import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./pages/Root";
import "./styles/global.css";
import "./styles/types";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Root />);
