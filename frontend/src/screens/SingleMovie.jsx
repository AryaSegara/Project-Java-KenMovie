import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { Movie } from "../data/MovieData";      
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
// import MovieRate from "../components/single/MovieRate";

export default function SingleMovie() {
    const {id} = useParams();
    const movie = Movie.find((movie) => movie.name === id);
    return (
        <Layout>
           <MovieInfo movie={movie}/>
           <div className="container mx-auto min-h-screen px-2 my-6">
            <MovieCasts />
            {/* Movie Rate */}
            {/* <MovieRate /> */}
           </div>
        </Layout>
    );
}