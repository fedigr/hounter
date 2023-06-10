import React from "react";
import {createRoot} from "react-dom";
import { ReactRoot } from "./Main/main";
import "./index.css";
const app =createRoot(document.getElementById("root"));
app.render(<ReactRoot />)