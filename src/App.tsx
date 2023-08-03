import Hero from './components/Hero';
import Navbar from './components/Navbar';
import styles from "./style";

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="h-[2000px] relative font-sans">
        <Navbar />
        <div className={`bg-background ${styles.flexStart}`}>
          <Hero />
        </div>
      </div>
    </Router>
  )
}

export default App;
