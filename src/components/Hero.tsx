import { useEffect, useState } from 'react';
import styles from '../style'
import Tilt from 'react-parallax-tilt';
import { kieranhardwick, backgroundGradient } from '../assets';

import "../tilt-styles.scss";

const Hero = () => {
    // Tailwind's 'md' breakpoint is 768px
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleTouchStart = () => {
        document.body.style.overflow = 'hidden';
    }

    const handleTouchEnd = () => {
        document.body.style.overflow = 'auto';
    }

    return (
        
        <section 
            id="home" 
            className={`flex flex-col items-center w-screen pt-[50px] pb-[150px] z-[50]`} // add z-index lower than Navbar
            style={{backgroundImage: `url(${backgroundGradient})`, backgroundSize: '1400px 100%', backgroundPosition: 'center', backgroundPositionY: 'center', backgroundRepeat: 'no-repeat', backdropFilter: 'blur(4px)'}}
        >
            
            <div className={`${styles.boxWidth} flex flex-col`}>
                <h1 className="text-white text-6xl sm:text-7xl text-center shadow-current font-bold mx-4 ">Kieran Hardwick</h1>
                <h2 className="text-white text-md xs:text-lg text-center shadow-current font-light pb-4 text-white/50 tracking-widest">Software Developer</h2>
                <div className="flex w-full justify-center items-center px-4 py-8">
                    <Tilt
                        transitionSpeed={2000}
                        className="parallax-effect-glare-scale"
                        perspective={2500}
                        glareEnable={false}
                        scale={isLargeScreen ? 1.05 : 1.0}
                        gyroscope={true}

                    >
                        <div className="hidden inner-element" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                            <img 
                                src={kieranhardwick} 
                                alt="Kieran Hardwick"
                                className="select-none max-w-[600px] w-full rounded-lg object-cover"
                                draggable="false"
                            />
                        </div>
                    </Tilt>
                </div>
            </div>

        </section>
    )
}

export default Hero
