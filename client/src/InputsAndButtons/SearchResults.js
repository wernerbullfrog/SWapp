import React from "react";
import { PeopleWrapper, ListItem } from "../Stylings/PageStyling";
const SearchResults = ({ person }) => {
  //   console.log("person:", person);
  return (
    <PeopleWrapper>
      <ListItem>{person.name}</ListItem>
    </PeopleWrapper>
  );
};

export default SearchResults;
