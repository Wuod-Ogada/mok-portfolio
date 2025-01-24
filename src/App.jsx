import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Homepage';
import ExperiencePage from './pages/ExperiencePage';
import ViewProject from './pages/ViewProjectPage';
import MainLayout from './layouts/MainLayout';
import WorkWithMePage from './pages/WorkWithMePage';

const App = () => {
  return (
    <>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} /> 
              <Route path="/work_experience" element={<ExperiencePage />} />
              <Route path="/Project/:title" element={<ViewProject />} />
              <Route path='/define_the_project' element={<WorkWithMePage />} />
            </Route>   
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App