import { useEffect, useState } from 'react'
import { Button } from './components/ui/button';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/header/Header';

function App () {
  const location = useLocation()
  const path = location.pathname
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <Header path={path}/>
      <Button
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Theme
      </Button>
      <Outlet />
    </div>
  );
}

export default App
