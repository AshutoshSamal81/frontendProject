import React from 'react';

interface SkillsBadgeProps {
  skills: string[];
  maxDisplay?: number;
}

const SkillsBadge: React.FC<SkillsBadgeProps> = ({ skills, maxDisplay = 2 }) => {
  const displaySkills = skills.slice(0, maxDisplay);
  const remainingCount = skills.length - maxDisplay;

  return (
    <div className="flex items-center gap-2">
      <span className="text-[14px] text-ijp-near-black leading-tight">
        {displaySkills.join(', ')}
      </span>
      {remainingCount > 0 && (
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#E5E7EB] text-[11px] font-medium text-ijp-gray leading-none">
          +{remainingCount}
        </span>
      )}
    </div>
  );
};

export default SkillsBadge;