import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';




const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);