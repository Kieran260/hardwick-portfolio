import styles from '../../style'
import { kieranhardwick, backgroundGradient } from '../../assets';

const Hero = () => {

    return (
        <section
            id="home"
            className={`will-change-auto border-b border-white/20 fade-in-1s flex flex-col items-center w-full min-h-[80vh] pt-[40px] xl:pt-[100px] pb-[200px] relative`}
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
        >

            {/* Background image */}
            <img
                src={backgroundGradient}
                alt="Background Gradient"
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />

            <div className={`${styles.boxWidth} flex flex-col`}>
                <h1 className="will-change-auto	 appear-slide-top text-white text-6xl sm:text-7xl text-center font-bold mx-4 drop-shadow-xl">Kieran Hardwick</h1>
                <h2 className="will-change-auto	 appear-slide-top text-white text-md xs:text-lg text-center font-light pb-4 text-white/50 tracking-widest">Software Developer</h2>
                <div className="appear-slide-top-delay will-change-auto flex w-full justify-center items-center px-4 py-8 mt-8">
                    <div className="parallax-effect-glare-scale max-w-[1000px]">
                        <div className="hidden inner-element">
                            <img
                                src={kieranhardwick}
                                alt="Kieran Hardwick"
                                className="select-none max-w-[600px] w-full rounded-lg object-cover"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
