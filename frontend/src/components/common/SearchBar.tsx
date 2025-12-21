import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[280px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-md border border-[#D7E0E3] bg-white py-[9px] pl-3.5 pr-10 text-[14px] text-ijp-near-black placeholder-ijp-gray leading-tight focus:border-ijp-teal focus:outline-none focus:ring-1 focus:ring-ijp-teal"
      />
      <Search
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ijp-gray pointer-events-none"
        strokeWidth={2}
      />
    </div>
  );
};

export default SearchBar;