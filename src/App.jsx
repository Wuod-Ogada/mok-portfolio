import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Projectsandapps from "./sections/Projectsandapps";

const App = () => {
  return (
    <>
    <section>
      <Navbar />
    </section>
    <section>
      <Hero />
    </section>
    <section>
      <About />
    </section>
      
      
      <Projectsandapps />
      <Footer />
    </>
  );
}

export default App