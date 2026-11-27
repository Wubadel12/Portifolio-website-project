import Home from "./component/home";
import Navbar from "./component/navbar";
import About from "./component/about";
import Skills from "./component/skill";
import Projects from "./component/project";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
