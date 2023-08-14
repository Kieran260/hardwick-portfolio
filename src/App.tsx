import Navbar from './components/Navbar';
import styles from "./style";
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './components/projects/ProjectsPage';
import BeatsbinDetails from './components/projects/details/BeatsbinDetails';

function App() {
  return (
    <Router>
      <div className="relative font-sans ">
        <div className={`flex flex-col ${styles.flexCenter}`}>
          
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={
            <HomePage />
          } />
          <Route path="/projects" element={
            <ProjectsPage />
          } />
          <Route path="/about" element={
            <div className={`flex flex-col ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div>About Page</div>
              </div>
            </div>
          } />
          <Route path="/contact" element={
            <div className={`flex flex-col ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <div>Contact Page</div>
              </div>
            </div>
          } />
          <Route path="/projects/beatsbin" element={
            <div className={`${styles.boxWidth}`}>
              <BeatsbinDetails />
            </div>
          } />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
