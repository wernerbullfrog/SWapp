import React from "react";

import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
} from "../Stylings/PageStyling";
const LandingPage = () => {
  return (
    <PageContainer id={"LandingPage"}>
      <SideImage src="https://tinyurl.com/2kd6vu6s" />
      <TextWrapper>
        <SideMessage>
          Welcome To the Ultimate Star Wars Page full of all your favorite info!{" "}
        </SideMessage>
      </TextWrapper>
    </PageContainer>
  );
};

export default LandingPage;
