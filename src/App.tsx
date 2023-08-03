import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import styles from "./style";

function App() {

  return (
    <div className="bg-background w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={``}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={``}>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
