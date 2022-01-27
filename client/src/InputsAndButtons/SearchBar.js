import React, { useEffect, useState } from "react";
import { PeopleSearchInput, ResultsContainer } from "../Stylings/PageStyling";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [peopleSearch, setPeopleSearch] = useState("");
  const [peopleResults, setPeopleResults] = useState([]);
  // request information from the back end to display the
  // list of names associated with SWapi search functionality.
  //  in order for the search to be initiated the user must input at least
  // two charecters. This was done as fix to bug that was found.
  // the bug in question would query the api with the last queried single
  // charecters even if the input field was empty.
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
