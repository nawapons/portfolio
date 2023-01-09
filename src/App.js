import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Certificates from "./components/Certificate";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
