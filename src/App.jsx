import { useEffect, useState } from 'react'
import { Button } from './components/ui/button';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <div>
        <Button
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Theme
        </Button>
        <h1>Hello, Tailwind CSS!</h1>
      </div>
    </div>
  );
}

export default App
