import React, { useEffect, useState } from "react";
import API from "../API";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

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
    </>
  );
};

export default Home;
