import React from "react";
import NavButtons from "../InputsAndButtons/NavButtons";
import {
  PageContainer,
  SideMessage,
  SideImage,
  TextWrapper,
  BtnContainer,
} from "../Stylings/PageStyling";
const LandingPage = () => {
  return (
    <PageContainer>
      <SideImage src="https://tinyurl.com/2kd6vu6s" />
      <TextWrapper>
        <SideMessage>
          Welcome To the Ultimate Star Wars Page full of all your favorite info!{" "}
        </SideMessage>
        <BtnContainer>
          <NavButtons />
        </BtnContainer>
      </TextWrapper>
    </PageContainer>
  );
};

export default LandingPage;
