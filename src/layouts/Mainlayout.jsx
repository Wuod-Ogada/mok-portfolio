import { Outlet } from "react-router";
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const Mainlayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}

export default Mainlayout