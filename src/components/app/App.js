import "./App.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Skill from "../skill/skill";
import About from "../about/About";
import Projects from "../../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
