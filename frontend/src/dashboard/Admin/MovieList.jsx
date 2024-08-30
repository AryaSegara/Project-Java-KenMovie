//  /* eslint-disable no-undef */
import Table from "../../components/Table";
import { Movie } from "../../data/MovieData";
import SideBar from "../SideBar";

export default function MovieList() {
  return (
    <SideBar>
      <div className="flex flex-col gap-2">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movie List</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>

        <Table data={Movie} />
      </div>
    </SideBar> 
  );
}
