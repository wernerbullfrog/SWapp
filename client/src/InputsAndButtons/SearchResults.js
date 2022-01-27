import React from "react";
import { PeopleWrapper, ListItem } from "../Stylings/PageStyling";
const SearchResults = ({ person }) => {
  // display all the results from the
  // search query from the search bar component
  return (
    <PeopleWrapper>
      <ListItem>{person.name}</ListItem>
    </PeopleWrapper>
  );
};

export default SearchResults;
