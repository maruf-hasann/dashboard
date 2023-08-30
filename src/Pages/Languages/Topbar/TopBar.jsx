import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BsMoonFill } from "react-icons/bs";
import { BiSolidBell } from "react-icons/bi";
import flag from '../../../assets/flag.png'
import { Badge } from '@material-tailwind/react';

const Topbar = () => {
    return (
      <div className=" bg-white  shadow-sm py-4 ">
        <div className="flex justify-between  lg:max-w-[1380px] mx-auto">
          <div>
            <FaBars size={25} className="text-[#2cab80]" />
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <img src={flag} className="w-[25px]" />
              <h5 className="text-base">ENGLISH</h5>
            </div>
            <div>
              <BsMoonFill size={25} className="text-[#2cab80]" />
            </div>
            <div>
              <Badge placement="top-start">
                <BiSolidBell size={25} className="text-[#2cab80]" />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topbar;