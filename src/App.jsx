import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Portifolio from "./components/portifolio/Portifolio";
import Resume from "./components/resume/Resume";

import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portifolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
