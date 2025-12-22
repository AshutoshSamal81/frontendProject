import React from 'react';
import { Info } from 'lucide-react';
import { Application } from '../../types/application';
import StatusBadge from '../common/StatusBadge';
import SkillsBadge from '../common/SkillsBadge';

interface TableRowProps {
  application: Application;
  isClickable?: boolean;
  onClick?: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ application, isClickable = false, onClick }) => {
  return (
    <tr
      className={`border-b border-[#E5E7EB] transition-colors hover:bg-[#F9FAFB] ${
        isClickable ? 'cursor-pointer' : ''
      }`}
      onClick={isClickable ? onClick : undefined}
    >
      {/* SO ID */}
      <td className="px-4 py-3.5">
        <span className="text-[14px] font-normal text-ijp-teal hover:underline leading-tight">
          {application.soId}
        </span>
      </td>

      {/* Role */}
      <td className="px-4 py-3.5">
        <span className="text-[14px] font-normal text-[#231F20] leading-tight">
          {application.role}
        </span>
      </td>

      {/* Account */}
      <td className="px-4 py-3.5">
        <span className="text-[14px] font-normal text-[#231F20] leading-tight">
          {application.account}
        </span>
      </td>

      {/* Applied Date */}
      <td className="px-4 py-3.5">
        <span className="text-[14px] font-normal text-[#231F20] leading-tight">
          {application.appliedDate}
        </span>
      </td>

      {/* Hiring Manager */}
      <td className="px-4 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[14px] font-normal text-[#231F20] leading-tight">
            {application.hiringManager}
          </span>
          {application.hasManagerInfo && (
            <Info 
              size={15} 
              className="text-ijp-teal cursor-pointer flex-shrink-0" 
              strokeWidth={2}
            />
          )}
        </div>
      </td>

      {/* Required Skills */}
      <td className="px-4 py-3.5">
        <SkillsBadge skills={application.requiredSkills} />
      </td>

      {/* Status */}
      <td className="px-4 py-3.5">
        <StatusBadge status={application.status} />
      </td>
    </tr>
  );
};

export default TableRow;