import React from "react";
import { PeopleWrapper } from "../Stylings/PageStyling";
const SearchResults = ({ person }) => {
  //   console.log("person:", person);
  return (
    <PeopleWrapper>
      <p>{person.name}</p>
    </PeopleWrapper>
  );
};

export default SearchResults;
