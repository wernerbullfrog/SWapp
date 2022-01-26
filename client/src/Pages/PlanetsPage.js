import React, { useEffect, useState } from "react";
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
    <PageContainer>
      <SideImage src="https://tinyurl.com/syv96bby" />
      <TextWrapper>
        <SideMessage>Planets</SideMessage>
        {planets.data ? (
          planets.data.map((planet) => <p>{planet.name}</p>)
        ) : (
          <></>
        )}
      </TextWrapper>
    </PageContainer>
  );
};

export default PlanetsPage;
