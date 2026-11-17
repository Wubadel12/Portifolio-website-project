import Home from "./component/home";
import Navbar from "./component/navbar";
import About from "./component/about";
import Skills from "./component/skill";
import Projects from "./component/project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;
