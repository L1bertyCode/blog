import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "@/shared/config/i18n/i18n";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
const domContainer = document.getElementById(
 "root"
) as HTMLElement;
import "./app/styles/index.scss";
import { StoreProvider } from "./app/providers/StoreProvider";
const root = createRoot(domContainer);
root.render(
 <StoreProvider>
  <ThemeProvider>
   <ErrorBoundary>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </ErrorBoundary>
  </ThemeProvider>
 </StoreProvider>
);
