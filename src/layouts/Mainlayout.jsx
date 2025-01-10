import { Outlet } from "react-router-dom";
import Navbar from '../sections';
import Footer from '../sections';

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Mainlayout