import Hero from './components/home/Hero';
import Navbar from './components/Navbar';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import styles from "./style";

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="relative font-sans">
        <Navbar />
        <div className={`bg-background ${styles.flexStart} flex flex-col`}>
          <Hero />
          <Skills />
          <Projects />
        </div>
      </div>
    </Router>
  )
}

export default App;
