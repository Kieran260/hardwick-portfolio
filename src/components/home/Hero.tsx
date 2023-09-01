import { useEffect, useState } from 'react';
import styles from '../../style'
import Tilt from 'react-parallax-tilt';
import { kieranhardwick, backgroundGradient } from '../../assets';

import "../../tilt-styles.scss";

const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
    const [manualTilt, setManualTilt] = useState(true);
    const [tiltAngles, setTiltAngles] = useState({ x: 20, y: 10 });

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

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTiltAngles({ x: 0, y: 0 }); // Reset angles to 0
        }, 500); // Start transitioning after 500 ms
        
        const transitionEndTimeout = setTimeout(() => {
            // Disable manual tilt after the transition completes
            setManualTilt(false);
        }, 1500); // Completely transition after 2000 ms
        
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(transitionEndTimeout);
        };
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
            className={`will-change-auto border-b border-white/20 fade-in-1s flex flex-col items-center w-full min-h-[100vh] pt-[50px] pb-[200px]`}
            style={{backgroundImage: `url(${backgroundGradient})`, backgroundSize: '1400px 100%', backgroundPosition: 'center', backgroundPositionY: 'center', backgroundRepeat: 'no-repeat', backdropFilter: 'blur(4px)'}}
        >
            
            <div className={`${styles.boxWidth} flex flex-col `}>
                <h1 className="will-change-auto	 appear-slide-top text-white text-6xl sm:text-7xl text-center font-bold mx-4 drop-shadow-xl">Kieran Hardwick</h1>
                <h2 className="will-change-auto	 appear-slide-top text-white text-md xs:text-lg text-center font-light pb-4 text-white/50 tracking-widest">Software Developer</h2>
                <div className="will-change-auto fade-in-1s-delay flex w-full justify-center items-center px-4 py-8 mt-8">
                    <Tilt
                        transitionSpeed={2000}
                        className="parallax-effect-glare-scale"
                        perspective={2500}
                        glareEnable={false}
                        scale={isLargeScreen ? 1.1 : 1.0}
                        gyroscope={true}
                        tiltAngleXManual={manualTilt ? tiltAngles.x : undefined}
                        tiltAngleYManual={manualTilt ? tiltAngles.y : undefined}
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
