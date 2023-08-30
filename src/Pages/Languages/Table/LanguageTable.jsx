import React from 'react';
import flag from '../../../assets/flag.png'
import { Switch } from '@material-tailwind/react';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
const LanguageTable = () => {
    return (
      <div className="bg-[#fff] shadow-sm  pb-5 rounded-md border-[1px]">
        <table className="w-full text-[#9e9e9e]">
          <thead className="text-left">
            <tr className="px-4 border-b-2  bg-[#f4f5f7] border-[#e5e7eb]">
              <th>
                <input type="checkbox" className="w-[30px]" />
              </th>
              <th>SR</th>
              <th>NAME</th>
              <th>ISO CODE</th>
              <th>FLAG</th>
              <th>PUBLISHED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="relative top-5 text-[20px]">
            <tr className="border-b-2 border-[#e5e7eb]">
              <td>
                <input type="checkbox" className="w-[30px]" />
              </td>
              <td>1</td>
              <td>German</td>
              <td>de</td>
              <td>
                <img src={flag} />
              </td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-3">
                <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr> <tr className="border-b-2 border-[#e5e7eb]">
              <td>
                <input type="checkbox" className="w-[30px]" />
              </td>
              <td>1</td>
              <td>German</td>
              <td>de</td>
              <td>
                <img src={flag} />
              </td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-3">
                <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr> <tr className="border-b-2 border-[#e5e7eb]">
              <td>
                <input type="checkbox" className="w-[30px]" />
              </td>
              <td>1</td>
              <td>German</td>
              <td>de</td>
              <td>
                <img src={flag} />
              </td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-3">
                <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr> <tr className="border-b-2 border-[#e5e7eb]">
              <td>
                <input type="checkbox" className="w-[30px]" />
              </td>
              <td>1</td>
              <td>German</td>
              <td>de</td>
              <td>
                <img src={flag} />
              </td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-3">
                <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr> <tr className="border-b-2 border-[#e5e7eb]">
              <td>
                <input type="checkbox" className="w-[30px]" />
              </td>
              <td>1</td>
              <td>German</td>
              <td>de</td>
              <td>
                <img src={flag} />
              </td>
              <td>
                <Switch color="green" defaultChecked />
              </td>
              <td className="flex gap-3">
                <LiaEditSolid size={25} />
                <RiDeleteBin6Line size={25} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default LanguageTable;