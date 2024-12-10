import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import "./app/style/index.scss";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{ color: "green" }}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Counter />);