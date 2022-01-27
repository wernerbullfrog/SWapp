import React, { useEffect, useState } from "react";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";
import ListPagination from "./ListPagination";
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
        {starships.data && <ListPagination List={starships} />}
      </TextWrapper>
      <SideImage src="https://tinyurl.com/2z4w2vk4" />
    </PageContainer>
  );
};

export default StarshipsPage;
