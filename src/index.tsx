import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";
import { Counter } from './feature/Counter/Counter';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Counter />);