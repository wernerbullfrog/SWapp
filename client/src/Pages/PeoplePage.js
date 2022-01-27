import React from "react";
import SearchBar from "../InputsAndButtons/SearchBar";
import {
  PageContainer,
  SideMessage,
  YodaImage,
  TextWrapper,
} from "../Stylings/PageStyling";
const PeoplePage = () => {
  return (
    <PageContainer id={"PeoplePage"}>
      <TextWrapper>
        <SideMessage>Look for all your favorite charecters here!</SideMessage>
        <SearchBar />
      </TextWrapper>
      <YodaImage src="https://tinyurl.com/2p9hy5xe" />
    </PageContainer>
  );
};

export default PeoplePage;
