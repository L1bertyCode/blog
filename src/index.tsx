import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
const domContainer = document.getElementById(
 "root"
) as HTMLElement;

const root = createRoot(domContainer);
root.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
);
