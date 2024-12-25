import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvder } from './app/providers/StoreProvder';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StoreProvder>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvder>
);