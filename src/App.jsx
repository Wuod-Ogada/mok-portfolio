import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from './layouts/Mainlayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
// import Experiencepage from './pages/Experiencepage';
// import Contactpage from './pages/Contactpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,  // This is equivalent to `<Route index element={<HomePage />} />`
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // Add other routes here
      // {
      //   path: '/work-experience',
      //   element: <Experiencepage />
      // },
      // {
      //   path: '/contact-me',
      //   element: <Contactpage />
      // },
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
