import React, { useRef, useState, useEffect } from "react";
import { Content, Wrapper } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie..."
          onChange={(event) => setState(event.currentTarget.value)}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
