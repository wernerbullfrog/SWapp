import React, { useEffect, useState } from "react";
import ListPagination from "./ListPagination";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
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
        {planets.data && <ListPagination List={planets} />}
      </TextWrapper>
    </PageContainer>
  );
};

export default PlanetsPage;
