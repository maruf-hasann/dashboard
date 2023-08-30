import React from 'react';

const CategorySearch = () => {
    return (
      <div className="bg-[#1a1c23] py-6 px-3 rounded-md mt-5 mb-16 ">
        <input
          placeholder='Search by Category name'
          type="text"
          className="bg-[#24262d] px-3 border-[1px] border-[#4c4f52] w-full py-2 rounded-md"
        />
      </div>
    );
};

export default CategorySearch;