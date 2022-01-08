import React, { useState } from "react";
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  return <div>Home Page</div>;
};

export default Home;
