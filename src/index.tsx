import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const domContainer = document.getElementById(
 "root"
) as HTMLElement;

const root = createRoot(domContainer);
root.render(<App />);
