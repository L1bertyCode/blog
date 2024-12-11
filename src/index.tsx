import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";
import { BrowserRouter } from 'react-router-dom';
import { App } from './App/App';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);