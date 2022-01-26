import React, { useEffect, useState } from "react";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";
const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    fetch(`/api/starships/`)
      .then((res) => res.json())
      .then((data) => {
        data.data ? setStarships(data) : setStarships([]);
      });
  }, []);
  return (
    <PageContainer id={"StarshipsPage"}>
      <TextWrapper>
        <SideMessage>Starships</SideMessage>
        {starships.data ? (
          starships.data.map((starship) => <p>{starship.name}</p>)
        ) : (
          <> </>
        )}
      </TextWrapper>
      <SideImage src="https://tinyurl.com/2z4w2vk4" />
    </PageContainer>
  );
};

export default StarshipsPage;
