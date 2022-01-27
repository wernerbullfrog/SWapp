import React, { useEffect, useState } from "react";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
  ListItem,
  ListWrapper,
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
        <ListWrapper>
          {allPeople.data ? (
            allPeople.data.map((people) => (
              <ListItem key={people.height}>{people.name}</ListItem>
            ))
          ) : (
            <></>
          )}
        </ListWrapper>
      </TextWrapper>
    </PageContainer>
  );
};

export default PeopleListPage;
