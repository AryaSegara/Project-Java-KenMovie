import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { Movie } from "../data/MovieData";      
import MovieInfo from "../components/single/MovieInfo";

export default function SingleMovie() {
    const {id} = useParams();
    const movie = Movie.find((movie) => movie.name === id);
    return (
        <Layout>
           <MovieInfo movie={movie}/>
        </Layout>
    );
}