import React, { useEffect, useState } from "react";
import { PeopleSearchInput, ResultsContainer } from "../Stylings/PageStyling";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [peopleSearch, setPeopleSearch] = useState("");
  const [peopleResults, setPeopleResults] = useState([]);

  useEffect(() => {
    if (peopleSearch.length >= 2) {
      fetch(`/api/search/${peopleSearch}`)
        .then((res) => res.json())
        .then((data) => {
          setPeopleResults(data);
        });
    } else {
      setPeopleResults([]);
    }
  }, [peopleSearch]);

  return (
    <>
      <PeopleSearchInput
        type="search"
        placeholder="Search for People"
        value={peopleSearch}
        onChange={(e) => {
          if (e.target.value === "") {
            setPeopleSearch("");
          } else {
            setPeopleSearch(e.target.value);
          }
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
