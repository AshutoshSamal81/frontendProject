import React from 'react';
import Layout from './components/layout/Layout';
import FilterPanel from './components/filters/FilterPanel';
import ContentSection from './components/layout/ContentSection';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex gap-6">
        {/* Left Sidebar - Filter Panel */}
        <FilterPanel />

        {/* Main Content Area - Application History */}
        <ContentSection />
      </div>
    </Layout>
  );
};

export default App;