import React from "react";
import SearchBar from "../InputsAndButtons/SearchBar";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";
const PeoplePage = () => {
  return (
    <PageContainer>
      <TextWrapper>
        <SideMessage>Look for all your favorite charecters here!</SideMessage>
        <SearchBar />
      </TextWrapper>
      <SideImage src="https://tinyurl.com/2p9hy5xe" />
    </PageContainer>
  );
};

export default PeoplePage;
