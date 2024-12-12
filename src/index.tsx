import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";
import { BrowserRouter } from 'react-router-dom';
import { App } from './App/App';
import { ThemeProvider } from './App/context/ThemeProvider/ThemeProvider';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);