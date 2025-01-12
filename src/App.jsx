import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';

import Mainlayout from './layouts/Mainlayout';

const HomePage = lazy(() => import('./HomePage'));
// import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
// import Experiencepage from './pages/Experiencepage';
// import Contactpage from './pages/Contactpage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        {/* Add other routes here */}
        {/* <Route path='/work-experience' element={<Experiencepage />} /> */}
        {/* <Route path='/contact-me' element={<Contactpage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;