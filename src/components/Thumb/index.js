import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

const Thumb = ({ img, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={img} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={img} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
