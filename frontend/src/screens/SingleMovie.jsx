/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import ShareModals from "../components/modals/ShareModals";
import { useState } from "react";
import { useEffect } from "react";

export default function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie`)
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
      </div>
    </Layout>
  );
}
