import React from 'react';
import FilterPanel from '../filters/FilterPanel';;
import SearchBar from '../common/SearchBar';
import ApplicationTable from '../table/ApplicationTable';
import Layout from '../layout/Layout';

const MyApplications: React.FC = () => {
  return (
    <Layout>
      {/* Page Header: Title (left) and Search (right) */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[18px] font-medium text-[#231F20] leading-tight">
          Application history
        </h1>
        <div className="ml-4">
          <SearchBar />
        </div>
      </div>

      {/* Main Content - Filter and Table */}
      <div className="flex gap-6">
        <FilterPanel />
        <div className="flex-1">

            {/* Application Table */}
            <ApplicationTable />
        </div>
      </div>
    </Layout>
  );
};

export default MyApplications;