import React from 'react';
import { FaSearchPlus } from "react-icons/fa";
import { Switch } from "@material-tailwind/react";
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import food from '../../assets/food.png'
const CategoryTable = () => {
    
    return (
      <div className="bg-[#1a1c23] px-3  pb-5 rounded-md">
      
        <table className="w-full text-[#9e9e9e]">
          <thead className="text-left">
            <tr className="px-4 border-b-2 border-[#24262d]">
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
              <th>ICON</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>PUBLISHED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="relative top-5 text-[20px]">
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>{" "}
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>{" "}
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>{" "}
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>{" "}
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>{" "}
            <tr className="border-b-2 border-[#24262d]">
              <td>
                <input type="checkbox" />
              </td>
              <td>OBC4</td>
              <td>
                <img src={food} />
              </td>
              <td className="text-blue-500">Cooking Essentials</td>
              <td>Cooking Essentials</td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-2 items-center">
                <FaSearchPlus size={25} /> <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default CategoryTable;