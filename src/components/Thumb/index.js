import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";
import PropTypes from "prop-types";

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

Thumb.propTypes = {
  img: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
