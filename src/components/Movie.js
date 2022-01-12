import React from "react";
import { useParams } from "react-router-dom";
import useMovieFetch from "./../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Spinner from "./Spinner";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  console.log(movie);
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;
