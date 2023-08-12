import styles from '../../style'
import SkillBadge from '.././ui/skill-badge'
import { useEffect, useState, useRef } from "react";



const Skills = () => {
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

    const useOnScreen = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
        const [isIntersecting, setIntersecting] = useState(false);
        
        useEffect(() => {
            if (!ref.current) return;
        
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIntersecting(true);
                        if (ref.current) {
                            observer.unobserve(ref.current); 
                        }                    
                    }
                },
                {
                    ...options,
                }
            );
        
            observer.observe(ref.current);
        
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref, options]);
        
        return isIntersecting;
    };
    
    

    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);
    
    const largeThresh1 = useOnScreen(ref1, { threshold: 0.4 });
    const largeThresh2 = useOnScreen(ref2, { threshold: 0.6 });
    const largeThresh3 = useOnScreen(ref3, { threshold: 0.8 });
    const largeThresh4 = useOnScreen(ref4, { threshold: 1.0 });

    const smallThresh1 = useOnScreen(ref1, { threshold: 1.0 });
    const smallThresh2 = useOnScreen(ref2, { threshold: 1.0 });
    const smallThresh3 = useOnScreen(ref3, { threshold: 1.0 });
    const smallThresh4 = useOnScreen(ref4, { threshold: 1.0 });

    const isVisible1 = isLargeScreen ? largeThresh1 : smallThresh1;
    const isVisible2 = isLargeScreen ? largeThresh2 : smallThresh2;
    const isVisible3 = isLargeScreen ? largeThresh3 : smallThresh3;
    const isVisible4 = isLargeScreen ? largeThresh4 : smallThresh4;

    return (
    <section className={`flex flex-col bg-background items-center w-screen py-[100px] border-b border-white/20 ${styles.paddingX}`}>
        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide mb-4">Skills</h1>
          <div className={`${styles.boxWidth} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[1000px] items-center font-normal text-lg`}>
            
            <div 
                className={`will-change-auto py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-blue-400 at-50 to-purple-400 ${isVisible1 ? "appear-slide-top-half" : "hidden-0"}`}
                ref={ref1}
            >
              <div className={`relative justify-center bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Web Development</h1>
                <div className="grid grid-cols-2 gap-2">
                    <SkillBadge className="col-span-1" skillName='HTML' />
                    <SkillBadge className="col-span-1" skillName='CSS' />
                    <SkillBadge className="col-span-1" skillName='React' />
                    <SkillBadge className="col-span-1" skillName='Tailwind' />

                </div>
              </div>
            </div>
    
            <div 
                className={`will-change-auto py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-purple-400 at-50 to-pink-400 ${isVisible2 ? "appear-slide-top-half" : "hidden-0"}`}
                ref={ref2}
            >
              <div className={`relative bg-background2 col-span-1 p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Programming Languages</h1>
                <div className="grid grid-cols-6 gap-2">
                <SkillBadge className="col-span-2" skillName='Java' />
                <SkillBadge className="col-span-2" skillName='Swift' />
                <SkillBadge className="col-span-2" skillName='Python' />
                <SkillBadge className="col-span-3" skillName='JavaScript' />
                <SkillBadge className="col-span-3" skillName='TypeScript' />

                </div>
              </div>
            </div>
    
            <div 
                className={`will-change-auto	py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-pink-400 at-50 to-red-400 ${isVisible3 ? "appear-slide-top-half" : "hidden-0"}`}
                ref={ref3}
            >
              <div className={` relative bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Database & Cloud</h1>
                <div className="grid grid-cols-4 gap-2">
                <SkillBadge className="col-span-2" skillName='SQL' />
                <SkillBadge className="col-span-2" skillName='NoSQL' />
                <SkillBadge className="col-span-2" skillName='PostgreSQL' />
                <SkillBadge className="col-span-2" skillName='AWS' />
                </div>
              </div>
            </div>
    
            <div 
                className={`will-change-auto	py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-red-400 at-50 to-yellow-400 ${isVisible4 ? "appear-slide-top-half" : "hidden-0"}`}
                ref={ref4}
            >
              <div className={` relative bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Tools & Frameworks</h1>
                <div className="grid grid-cols-6 gap-2">
                    <SkillBadge className="col-span-2" skillName='Git' />
                    <SkillBadge className="col-span-2" skillName='NodeJS' />
                    <SkillBadge className="col-span-2" skillName='NextJS' />
                    <SkillBadge className="col-span-3" skillName='JUnit' />
                    <SkillBadge className="col-span-3" skillName='Spring Boot' />
                </div>
              </div>
            </div>
    
          </div>
        </section>
      )
    }

export default Skills
