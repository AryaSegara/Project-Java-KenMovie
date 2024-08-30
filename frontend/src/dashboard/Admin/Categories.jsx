//  /* eslint-disable no-undef */
import { HiPlus } from "react-icons/hi";
import Table from "../../components/Table";
import { Movie } from "../../data/MovieData";
import SideBar from "../SideBar";

export default function Categories() {
  return (
    <SideBar>
      <div className="flex flex-col gap-2">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border-subMain text-white py-2 px-4 rounded">
            <HiPlus /> Create
          </button>
        </div>

        <Table data={Movie} />
      </div>
    </SideBar> 
  );
}
