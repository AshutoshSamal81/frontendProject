import React from 'react';
import { Bell } from 'lucide-react';

interface NavigationItem {
  label: string;
  active: boolean;
}

const Header: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    { label: 'Home', active: false },
    { label: 'Opportunities', active: false },
    { label: 'Assigning & Tracking', active: false },
    { label: 'My Applications', active: true },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between px-8 py-3.5">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <div className="text-[22px] font-semibold tracking-tight text-ijp-near-black leading-none">
            <span className="font-bold">UST</span>
            <span className="font-normal">IJP</span>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="flex items-center gap-10">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative">
              <button
                className={`px-1 pb-3.5 pt-3.5 text-[15px] leading-tight transition-colors ${
                  item.active
                    ? 'font-medium text-[#231F20]'
                    : 'font-normal text-[#7A7480]'
                }`}
              >
                {item.label}
              </button>
              {item.active && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-ijp-dark-blue rounded-t-sm" />
              )}
            </div>
          ))}
        </nav>

        {/* Right Section - Notifications & User Profile */}
        <div className="flex items-center gap-5">
          {/* Notification Bell with Badge */}
          <div className="relative cursor-pointer">
            <Bell size={19} className="text-ijp-gray" strokeWidth={2} />
            <span className="absolute -top-1 -right-1 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-ijp-coral text-[10px] font-semibold text-white leading-none">
              1
            </span>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[14px] font-medium leading-tight text-ijp-near-black">
                Sarah Anderson
              </div>
              <div className="text-[12px] leading-tight text-ijp-gray mt-0.5">
                Lead Developer
              </div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-[13px] font-semibold text-white">
              SA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;