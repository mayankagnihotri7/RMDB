import React from "react";
import { Content, Wrapper, Text } from "./HeroImage.styles";
import PropTypes from "prop-types";

const HeroImage = ({ title, image, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
