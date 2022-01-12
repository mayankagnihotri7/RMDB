import React from "react";
import { Image, Wrapper } from "./Actors.styles";
import PropTypes from "prop-types";

const Actors = ({ image_url, name, character }) => (
  <Wrapper>
    <Image src={image_url} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actors.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  image_url: PropTypes.string,
};

export default Actors;
