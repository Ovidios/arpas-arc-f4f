/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Quiz from './quiz';  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Quiz />
  </StrictMode>
);
*/


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
