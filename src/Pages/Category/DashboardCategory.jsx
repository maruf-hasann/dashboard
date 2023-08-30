import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { CiExport, CiImport } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import CategorySearch from './CategorySearch';
import CategoryTable from './CategoryTable';
import { FiPlus } from 'react-icons/fi';
const DashboardCategory = () => {
  const [openRight, setOpenRight] = useState(false);
    const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
 
    return (
      <div className="bg-[#121317] text-white h-screen">
        <div className="lg:max-w-[1380px] mx-auto pt-8  ">
          <h3
            className="text-[20px]
                font-semibold mb-6"
          >
            Category
          </h3>
          {/* Top Area Start */}
          <div className="flex justify-between items-center bg-[#1a1c23] py-6 px-3 rounded-md">
            {/* left Button */}
            <div className="flex gap-4">
              <button className="flex  items-center gap-2 border px-3 py-2 rounded-md">
                <CiExport size={25} /> Export
              </button>
              <button className="flex  items-center gap-2 border px-3 py-2 rounded-md">
                <CiImport size={25} />
                Import
              </button>
            </div>
            {/* Right Button */}
            <div className="flex gap-3">
              <button className="flex  items-center gap-2 bg-[#808287] px-4 py-2 rounded-md">
                <LiaEditSolid size={25} /> Bulk Action
              </button>
              <button className="flex  items-center gap-2 bg-[#8d0e11] px-4 py-2 rounded-md">
                {" "}
                <RiDeleteBin6Line />
                Delete
              </button>
              <button
                onClick={openDrawerRight}
                className="flex  items-center gap-2 bg-[#0e9e6e] px-3 py-2 rounded-md"
              >
                <FiPlus size={25} className="text-white" /> Add Category
              </button>
            </div>
          </div>
          {/* Top Area End */}

          {/* Search */}
          <CategorySearch />
          {/* Swich */}

          {/* Table */}

          <CategoryTable />
          {/* DRawer Start */}
          <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4 bg-[#1a1c23]  compo"
            
          >
            <div className="mb-6 flex items-center justify-between dr_width">
              <Typography variant="h5" color="blue-gray">
                Drawer on Right
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
          </Drawer>
          {/* DRawer End */}
        </div>
      </div>
    );
};

export default DashboardCategory;