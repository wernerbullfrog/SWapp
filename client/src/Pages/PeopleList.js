import React, { useEffect, useState } from "react";
import ListPagination from "./ListPagination";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";
// all the list components are coded generally the same way
// the only major difference is the positions of the image
// and the side message
const PeopleListPage = () => {
  const [allPeople, setallPeople] = useState([]);
  useEffect(() => {
    fetch(`/api/people/`)
      .then((res) => res.json())
      .then((data) => {
        data.data ? setallPeople(data) : setallPeople([]);
      });
  }, []);
  return (
    <PageContainer id={"PeopleListPage"}>
      <SideImage src="https://tinyurl.com/ybt3fk8m" />
      <TextWrapper>
        <SideMessage>All People</SideMessage>
        {allPeople.data && <ListPagination List={allPeople} />}
      </TextWrapper>
    </PageContainer>
  );
};

export default PeopleListPage;
