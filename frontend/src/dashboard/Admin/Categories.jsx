//  /* eslint-disable no-undef */
import { HiPlus } from "react-icons/hi";
import SideBar from "../SideBar";
import Table2 from "../../components/Table2";
import { CategoriesData } from "../../data/CategoriesData";

export default function Categories() {
  if (localStorage.getItem("user") === null) {
    window.location.href = "/login";
  } else {
    return (
      <SideBar>
        <div className="flex flex-col gap-2">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Categories</h2>
            <button className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border-subMain text-white py-2 px-4 rounded">
              <HiPlus /> Create
            </button>
          </div>

          <Table2 data={CategoriesData} />
        </div>
      </SideBar>
    );
  }
}
