import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaJava, FaSwift, FaPython, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiJunit5 } from 'react-icons/si'; 
import { BiLogoTypescript, BiLogoJavascript, BiLogoFirebase, BiLogoGit, BiLogoTailwindCss } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { DiPostgresql } from 'react-icons/di';

interface SkillBadgeProps {
    className?: string;
    skillName: string;
}

const iconMapping: Record<string, JSX.Element> = {
    HTML: <AiFillHtml5 />,
    CSS: <FaCss3Alt />,
    React: <FaReact />,
    Tailwind: <BiLogoTailwindCss />,
    Java: <FaJava />,
    Swift: <FaSwift />,
    Python: <FaPython />,
    JavaScript: <BiLogoJavascript />,
    TypeScript: <BiLogoTypescript />,
    SQL: <GrMysql />,
    NoSQL: <BiLogoFirebase />,
    PostgreSQL: <DiPostgresql />,
    AWS: <FaAws />,
    Git: <BiLogoGit />,
    NodeJS: <FaNodeJs />,
    NextJS: <SiNextdotjs />,
    JUnit: <SiJunit5 />,
    'Spring Boot': <SiSpringboot />
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ skillName, className }) => {
    const icon = iconMapping[skillName];

    if (!icon) return null;

    return (
        <div className={`${className} hover:bg-white/5 hover:border-white/50 transition-colors flex bg-background2 border border-white/25 rounded-md h-[25px] justify-start items-center px-1 gap-x-1.5`}>
            <div className="text-white">{icon}</div>
            <div className="text-xs text-white/75">{skillName}</div>
        </div>
    );
}

export default SkillBadge;
