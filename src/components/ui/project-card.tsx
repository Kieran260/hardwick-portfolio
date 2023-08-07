import React from 'react';
import SkillBadge from './skill-badge';
import { beatsbinCover } from '../../assets';
interface ProjectCardProps {
    className?: string;
    name: string;
    badges?: JSX.Element[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, badges, className }) => {
  return (
    <div className={`${className} hover:cursor-pointer hover:bg-white/5 hover:border-white/50 transition-colors flex flex-col bg-background2 border border-white/25 rounded-md min-h-[380px] max-h-[450px] flex-grow justify-start items-start mx-2 p-4 gap-x-1.5 `}>
        <div className="w-full min-h-[250px] h-auto rounded-md border border-white/10"
            style={{backgroundImage: `url(${beatsbinCover})`, backgroundSize: '120%', backgroundPositionX: 'center', backgroundPositionY: 'center'}}
                    >
        </div>
        <span className="text-lg text-white pt-4 font-semibold">BeatsBin</span>
        <h2 className="text-sm text-gray-400">Cloud File Hosting & Sharing Platform </h2>
        <div className="flex flex-wrap gap-2 py-2">
            <SkillBadge className="px-2" skillName='React' />
            <SkillBadge className="px-2" skillName='TypeScript' />
            <SkillBadge className="px-2" skillName='Tailwind' />
            <SkillBadge className="px-2" skillName='NextJS' />
            <SkillBadge className="px-2" skillName='PostgreSQL' />
            <SkillBadge className="px-2" skillName='AWS' />
        </div>
    </div>
  );
}

export default ProjectCard;
