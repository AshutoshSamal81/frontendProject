import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[280px]">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-md border border-[#D7E0E3] bg-white py-[9px] pl-3.5 pr-10 text-[14px] text-[#7A7480] placeholder-ijp-gray leading-tight focus:border-ijp-teal focus:outline-none focus:ring-1 focus:ring-ijp-teal"
      />
    </div>
  );
};

export default SearchBar;