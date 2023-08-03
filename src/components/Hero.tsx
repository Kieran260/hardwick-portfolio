import React, { useState } from 'react';
import styles from '../style'
import Tilt from 'react-parallax-tilt';
import { kieranhardwick, backgroundGradient } from '../assets';

import "../tilt-styles.scss";

const Hero = () => {


    return (
        <section 
            id="home" 
            className={`flex flex-col items-center h-[800px] w-screen ${styles.paddingY} `} 
            style={{backgroundImage: `url(${backgroundGradient})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className={`${styles.boxWidth} flex flex-col gap-y-4`}>
                <h1 className="text-white text-3xl text-center">Kieran Hardwick</h1>
                <h1 className="text-white text-3xl text-center">Kieran Hardwick</h1>

                <div className="flex w-full justify-center items-center py-8">
                    <Tilt
                    transitionSpeed={2000}
                    className="parallax-effect-glare-scale"
                    perspective={2000}
                    glareEnable={false}
                    scale={1.05}
                    gyroscope={true}
                    >
                    <div className="inner-element">
                        <img className="select-none w-[600px] rounded-lg" draggable="false" src={kieranhardwick}></img>
                    </div>
                    </Tilt>
                </div>
            </div>

        </section>
    )
}

export default Hero