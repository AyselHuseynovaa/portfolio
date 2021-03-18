import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
// import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch> */}
      <div id="myAnchor">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
