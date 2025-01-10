import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Mainlayout from './Layouts/Mainlayout';
import Homepage from './pages/Homepage';
//import Experiencepage from './pages/Experiencepage'
// import Viewprojectpage from './pages/Viewprojectpage'
import Contactpage from './pages/Contactpage'

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<Mainlayout />} >

      <Route index element={<Homepage/>} /> 
      {/* <Route path='/work-experience' element={<Experiencepage/>} />  */}
      <Route path='/contact-me' element={<Contactpage/>} /> 
    </Route>
)
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App