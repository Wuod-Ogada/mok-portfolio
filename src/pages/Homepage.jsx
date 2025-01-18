import Hero from '../sections/Hero'
import About from '../sections/About'
import Projectsandapps from '../sections/Projectsandapps'


import { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Suspense>
        <Hero />
        <About />
        <Projectsandapps />
      </Suspense> 
    </>
  );
}

export default HomePage