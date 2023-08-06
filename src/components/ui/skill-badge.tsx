import React from 'react';

interface SkillBadgeProps {
    className?: string;
    name: string;
    icon: JSX.Element;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, className }) => {
  return (
    <div className={`${className} hover:bg-white/5 hover:border-white/50 transition-colors flex bg-background2 border border-white/25 rounded-md h-[25px] justify-start items-center px-1 gap-x-1.5`}>
        <div className="text-white">{icon}</div>
        <div className="text-xs text-white/75">{name}</div>
    </div>
  );
}

export default SkillBadge;
