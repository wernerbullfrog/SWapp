import React, { useEffect, useState } from "react";
import ListPagination from "./ListPagination";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";

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
