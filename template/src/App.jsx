import Home from "./component/home";
import Navbar from "./component/navbar";
import About from "./component/about";
import Skills from "./component/skill";
import Projects from "./component/project";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </>
  );
}

export default App;
