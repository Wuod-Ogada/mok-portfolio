import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainlayout from './layouts/Mainlayout';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Experiencepage from './pages/Experiencepage';
import { Suspense } from "react";
// import Contactpage from './pages/Contactpage';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/"  element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="work-experience" element={<Experiencepage />} />
            {/* Add other routes here */}
            {/* <Route path='/contact-me' element={<Contactpage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
};


export default App;