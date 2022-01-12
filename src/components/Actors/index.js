import React from "react";
import { Image, Wrapper } from "./Actors.styles";

const Actors = ({ image_url, name, character }) => (
  <Wrapper>
    <Image src={image_url} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actors;
