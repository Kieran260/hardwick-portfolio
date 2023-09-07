import styles from '../../style'
import Hero from './Hero'
import Projects from './Projects';
import Skills from './Skills'

const HomePage = () => {
  return (
    <div className={`bg-background ${styles.flexStart} flex flex-col`}>
      <Hero />
      <Skills />


      <Projects />
    </div>
  )
};

export default HomePage;