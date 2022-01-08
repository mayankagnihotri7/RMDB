import React from "react";
import API from "../API";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.jpg";
import Grid from "./Grid";
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import Thumb from "./Thumb";

const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();

  const randomNumber = Math.floor(Math.random() * state.results.length);

  return (
    <>
      {state.results[randomNumber] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[randomNumber].backdrop_path}`}
          title={state.results[randomNumber].original_title}
          text={state.results[randomNumber].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            img={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
