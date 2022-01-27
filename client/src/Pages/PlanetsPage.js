import React, { useEffect, useState } from "react";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
  ListItem,
  ListWrapper,
} from "../Stylings/PageStyling";
const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch(`/api/planets/`)
      .then((res) => res.json())
      .then((data) => {
        data.data ? setPlanets(data) : setPlanets([]);
      });
  }, []);
  return (
    <PageContainer id={"PlanetsPage"}>
      <SideImage src="https://tinyurl.com/syv96bby" />
      <TextWrapper>
        <SideMessage>Planets</SideMessage>
        <ListWrapper>
          {planets.data ? (
            planets.data.map((planet) => <ListItem>{planet.name}</ListItem>)
          ) : (
            <></>
          )}
        </ListWrapper>
      </TextWrapper>
    </PageContainer>
  );
};

export default PlanetsPage;
