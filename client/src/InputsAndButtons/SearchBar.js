import React, { useEffect, useState } from "react";
import { PeopleSearchInput, ResultsContainer } from "../Stylings/PageStyling";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [peopleSearch, setPeopleSearch] = useState("");
  const [peopleResults, setPeopleResults] = useState([]);

  useEffect(() => {
    fetch(`/api/search/${peopleSearch}`)
      .then((res) => res.json())
      .then((data) => {
        data.data ? setPeopleResults(data) : setPeopleResults([]);
      });
  }, [peopleSearch]);

  return (
    <>
      <PeopleSearchInput
        type="search"
        placeholder="Search for People"
        value={peopleSearch}
        onChange={(e) => {
          setPeopleSearch(e.target.value);
        }}
      />
      {peopleResults.data ? (
        <ResultsContainer>
          {peopleResults.data.map((person) => (
            <SearchResults person={person} />
          ))}
        </ResultsContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchBar;
