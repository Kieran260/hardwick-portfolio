import Navbar from './components/Navbar';
import styles from "./style";
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './components/projects/ProjectsPage';
import ProjectDetails from './components/projects/details/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="relative font-sans ">
        <div className={`backdrop-blur-md sticky top-0 z-50 flex flex-col ${styles.flexCenter} border-b border-white/20`}>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
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
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
