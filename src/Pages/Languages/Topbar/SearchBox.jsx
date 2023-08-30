import React from 'react';

import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
const SearchBox = () => {
    return (
      <div className="bg-[#fff] py-4 px-3 rounded-md mt-5 mb-16 shadow-sm flex justify-between ">
        <div>
          <input
            placeholder="Search by Category name"
            type="text"
            className="placeholder:text-[#b3aec0] bg-[#fff] px-3 border-[1px] border-[##e5e7eb] w-[650px] py-2 rounded-md"
          />
        </div>
        <div className="flex gap-3 text-white">
          <button className="flex  items-center text-[#b8babc] gap-2 bg-[#f2f3f5] px-4 py-2 rounded-md">
            <LiaEditSolid size={25} /> Bulk Action
          </button>
          <button className="flex  items-center gap-2 bg-[#ff7f7f] px-2 py-2 rounded-md">
            {" "}
            <RiDeleteBin6Line />
            Delete
          </button>
          <button className="flex  items-center gap-2 bg-[#0e9e6e] px-3 py-2 rounded-md">
            <FiPlus size={25} className="text-white" /> Add Category
          </button>
        </div>
      </div>
    );
};

export default SearchBox;