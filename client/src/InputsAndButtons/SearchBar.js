import React, { useEffect, useState } from "react";
import { PeopleSearchInput } from "../Stylings/PageStyling";
const SearchBar = () => {
  const [peopleSearch, setPeopleSearch] = useState("");
  const [peopleResults, setPeopleResults] = useState([]);
  useEffect(() => {
    fetch(`/api/people/search/${peopleSearch}`)
      .then((res) => res.json())
      .then((data) => {
        setPeopleResults(data);
        console.log(data);
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
    </>
  );
};

export default SearchBar;
