import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainlayout from './layouts/Mainlayout';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Experiencepage from './pages/Experiencepage';
// import Contactpage from './pages/Contactpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/work-experience' element={<Experiencepage />} />
          {/* Add other routes here */}
          {/* <Route path='/contact-me' element={<Contactpage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;