import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { cv } from './data/cv';

function App() {
  return (
    <>
      <Nav name={cv.personal.name} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
