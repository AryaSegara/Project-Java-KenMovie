/* eslint-disable react/prop-types */
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (category, i) => {
  return (
    <tr key={i} className="font-semibold font-sans">
      <td className={`${Text} text-start`}>{category.id}</td>
      <td className={`${Text} ` }>{category.name}</td>
      <td className={`${Text} `}>
        
        {/* <div className="flex items-center gap-3"> */}
        {/* <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
          Edit <FiEdit className="text-green-500" />
        </button>
        <div className="flex items-center gap-3">
          <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
            <MdDelete className="text-green-500" />
          </button>
        </div> */}
      </td>
    </tr>
  );
};

export default function Table2({ data }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              ID
            </th>
            <th scope="col" className={`${Head} `}>
              Name
            </th>
            <th scope="col" className={`${Head} text-end`}>
              
            </th>
          </tr>
        </thead>

        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((category, i) => Rows(category, i))}
        </tbody>
      </table>
    </div>
  );
}
