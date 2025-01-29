import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavHeader from './components/NavHeader';
import Footer from './components/Footer';

import Home from './pages/Homepage';
import ExperiencePage from './pages/ExperiencePage';
import ViewProject from './pages/ViewProjectPage';
// import MainLayout from './layouts/MainLayout';
import WorkWithMePage from './pages/WorkWithMePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
    <NavHeader /> 
          <Routes>
            <Route>
              <Route index element={<Home />} /> 
              <Route path="/work_experience" element={<ExperiencePage />} />
              <Route path="/Project/:title" element={<ViewProject />} />
              <Route path='/define_the_project' element={<WorkWithMePage />} />
            </Route>   
          </Routes>
    <Footer />
      </BrowserRouter>
    </>
  )
}

export default App