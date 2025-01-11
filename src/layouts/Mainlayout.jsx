import { Outlet } from "react-router-dom";
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

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