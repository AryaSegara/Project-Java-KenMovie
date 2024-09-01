import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { Movie } from "../data/MovieData";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import ShareModals from "../components/modals/ShareModals";
import { useState } from "react";
import { useEffect } from "react";
// import MovieRate from "../components/single/MovieRate";

export default function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movie")
    .then((response) => response.json())
    .then((data) => {
      data.map((m)=>{
        if(m.id == id){
          setMovie(m)
        }
      })
    })
  }, []);

  return (
    <Layout>
      <ShareModals
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        {/* Movie Rate */}
        {/* <MovieRate /> */}
      </div>
    </Layout>
  );
}
