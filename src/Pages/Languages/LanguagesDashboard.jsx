import React from 'react';
import Topbar from './Topbar/Topbar';
import SearchBox from './Topbar/SearchBox';
import LanguageTable from './Table/LanguageTable';


const LanguagesDashboard = () => {
    return (
      <div className="bg-[#f9fafb] h-screen">
        {/* Top BAR */}
        <Topbar />
        <div className="lg:max-w-[1380px] mx-auto pt-8  text-black ">
          <h3
            className="text-[20px]
                font-semibold mb-6"
          >
            Language
          </h3>

          {/* Search Box */}
                <SearchBox />
                {/* Table */}
                <LanguageTable/>
        </div>
      </div>
    );
};

export default LanguagesDashboard;