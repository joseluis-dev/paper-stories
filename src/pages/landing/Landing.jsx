import { Header } from '@/components/header/Header'
import { Hero } from '@/layouts/hero/Hero';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Fotter } from '@/layouts/footer/Fotter';

export const Landing = () => {
  const location = useLocation()
  const path = location.pathname
  console.log(path)

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark', false);
  }, []);

  return (
    <div className='flex flex-col min-h-screen items-center px-5'>
      <Header path={path}/>
      <main className='flex flex-col h-full w-full max-w-3xl gap-2 items-center m-auto'>
        <Hero />
      </main>
      <Fotter />
    </div>
  )
}
