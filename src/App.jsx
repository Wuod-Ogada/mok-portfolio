import { Routes, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Mainlayout from './layouts/Mainlayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
//import Experiencepage from './pages/Experiencepage'
// import Viewprojectpage from './pages/Viewprojectpage'
//import Contactpage from './pages/Contactpage'

  const router = createBrowserRouter(
  createRoutesFromElements( 
    <Routes path='/' element={<Mainlayout />} >
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />

      {/* <Route path='/work-experience' element={<Experiencepage/>} />  */}
      {/* <Route path='/contact-me' element={<Contactpage/>} />   */}
    </Routes>
  ));

 {/* const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> }
  ]);*/}

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App