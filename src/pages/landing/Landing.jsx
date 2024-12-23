import { Header } from '@/components/header/Header'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Landing = () => {
  const location = useLocation()
  const path = location.pathname
  console.log(path)

  useEffect(() => {
      const body = document.querySelector('body');
      body.classList.toggle('dark', false);
    }, []);

  return (
    <div className='flex min-h-screen justify-center px-5'>
      <div className="flex flex-col w-full max-w-3xl">
        <Header path={path}/>
        <main>
          main
        </main>
        <footer className='mt-auto'>
          footer
        </footer>
      </div>
    </div>
  )
}
