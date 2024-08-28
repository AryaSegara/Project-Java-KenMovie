import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import { Movie } from "../data/MovieData";
import Layout from "../layout/Layout";
import { FaHeart } from "react-icons/fa";

export default function MoviePage(){
    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-2">
                <Filters />
                <p className="text-lg font-medium my-6">
                    Total <span className="font-bold text-subMain">{Movie?.length}</span>{' '}Items Found
                </p>
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {/* GET DATA */}
                    {
                        Movie.map((m, index) =>(
                            <div
                            key={index}
                            className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
                          >
                            <Link to={`/movie/${m?.name}`} className="w-full">
                              <img
                                src={`/images/${m?.image}`}
                                alt={m.name}
                                className="w-full h-64 object-cover"
                              />
                            </Link>
                            <div className="absolute flex-btn gap-2 bottom-0 left-0 right-0 bg-main bg-opacity-60 text-white px-4 py-3 ">
                                <h3 className="font-semibold truncate">{m.name}</h3>
                                <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
                                    <FaHeart />
                                </button>
                            </div>
                          </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}