import styles from '../style'
import SkillBadge from './ui/skill-badge'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaJava, FaSwift, FaPython, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiJunit5 } from 'react-icons/si'; 
import { BiLogoTypescript, BiLogoJavascript, BiLogoFirebase, BiLogoGit, BiLogoTailwindCss } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { DiPostgresql } from 'react-icons/di';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState, useRef } from "react";


const cardVariants: Variants = {
    offscreen: {
      y: 40,
      opacity: 0
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1,
      },
      opacity: 1
    }
  };

const Skills = () => {


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
    
    const isVisible1 = useOnScreen(ref1, { threshold: 0.8 });
    const isVisible2 = useOnScreen(ref2, { threshold: 0.8 });
    const isVisible3 = useOnScreen(ref3, { threshold: 0.8 });
    const isVisible4 = useOnScreen(ref4, { threshold: 0.8 });


    return (
    <section className={`flex flex-col bg-background items-center w-screen mb-[100px] ${styles.paddingX}`}>
        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide">Skills</h1>
          <div className={`${styles.boxWidth} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[1000px] items-center h-[200px] font-normal text-lg`}>
            
                <motion.div 
                    className={`py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-blue-400 at-50 to-purple-400`}
                    ref={ref1}
                    initial="offscreen"
                    animate={isVisible1 ? "onscreen" : "offscreen"}
                    variants={cardVariants}
                >
              <div className={`relative justify-center bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Web Development</h1>
                <div className="grid grid-cols-2 gap-2">
                  <SkillBadge className="col-span-1" name={'HTML'} icon={<AiFillHtml5 />} />
                  <SkillBadge className="col-span-1" name={'CSS'} icon={<FaCss3Alt />} />
                  <SkillBadge className="col-span-1" name={'React'} icon={<FaReact />} />
                  <SkillBadge className="col-span-1" name={'Tailwind'} icon={<BiLogoTailwindCss />} />
                </div>
              </div>
            </motion.div>
    
            <motion.div 
            className={`py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-purple-400 at-50 to-pink-400`}
                    ref={ref2}
                    initial="offscreen"
                    animate={isVisible2 ? "onscreen" : "offscreen"}
                    variants={cardVariants}
                >
              <div className={`relative bg-background2 col-span-1 p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Programming Languages</h1>
                <div className="grid grid-cols-6 gap-2">
                  <SkillBadge className="col-span-2" name={'Java'} icon={<FaJava />} />
                  <SkillBadge className="col-span-2" name={'Swift'} icon={<FaSwift />} />
                  <SkillBadge className="col-span-2" name={'Python'} icon={<FaPython />} />
                  <SkillBadge className="col-span-3" name={'JavaScript'} icon={<BiLogoJavascript />} />
                  <SkillBadge className="col-span-3" name={'TypeScript'} icon={<BiLogoTypescript />} />
                </div>
              </div>
            </motion.div>
    
            <motion.div 
            className={`py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-pink-400 at-50 to-red-400`}
                    ref={ref3}
                    initial="offscreen"
                    animate={isVisible3 ? "onscreen" : "offscreen"}
                    variants={cardVariants}
                >
              <div className={` relative bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Database & Cloud</h1>
                <div className="grid grid-cols-4 gap-2">
                  <SkillBadge className="col-span-2" name={'SQL'} icon={<GrMysql />} />
                  <SkillBadge className="col-span-2" name={'NoSQL'} icon={<BiLogoFirebase />} />
                  <SkillBadge className="col-span-2" name={'PostgreSQL'} icon={<DiPostgresql />} />
                  <SkillBadge className="col-span-2" name={'AWS'} icon={<FaAws />} />
                </div>
              </div>
            </motion.div>
    
            <motion.div 
            className={`py-1 my-4 mx-2 rounded-md col-span-1 bg-gradient-to-r from-red-400 at-50 to-orange-400`}
                    ref={ref4}
                    initial="offscreen"
                    animate={isVisible4 ? "onscreen" : "offscreen"}
                    variants={cardVariants}
                >
              <div className={` relative bg-background2 w-full p-4 h-[120px]`}>
                <h1 className="text-white text-sm font-normal mb-2">Tools & Frameworks</h1>
                <div className="grid grid-cols-6 gap-2">
                  <SkillBadge className="col-span-2" name={'Git'} icon={<BiLogoGit />} />
                  <SkillBadge className="col-span-2" name={'NodeJS'} icon={<FaNodeJs />} />
                  <SkillBadge className="col-span-2" name={'NextJS'} icon={<SiNextdotjs />} />
                  <SkillBadge className="col-span-3" name={'JUnit'} icon={<SiJunit5 />} />
                  <SkillBadge className="col-span-3" name={'Spring Boot'} icon={<SiSpringboot />} />
                </div>
              </div>
            </motion.div>
    
          </div>
        </section>
      )
    }

export default Skills
