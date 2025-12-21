import React from 'react';
import SearchBar from '../common/SearchBar';
import ApplicationTable from '../table/ApplicationTable';

const ContentSection: React.FC = () => {
  return (
    <div className="flex-1">
      {/* Section Header */}
      <div className="mb-5">
        <h1 className="text-[20px] font-medium text-ijp-near-black leading-tight">
          Application history
        </h1>
      </div>

      {/* Search Bar - Top Right */}
      <div className="mb-4 flex justify-end">
        <SearchBar />
      </div>

      {/* Application Table */}
      <ApplicationTable />
    </div>
  );
};

export default ContentSection;