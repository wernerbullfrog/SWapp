import React from "react";
import {
  PageContainer,
  WelcomeMessage,
  SideImage,
} from "../Stylings/PageStyling";
const LandingPage = () => {
  return (
    <PageContainer>
      <WelcomeMessage>
        Welcome To the Ultimate Star Wars Page full of all your favorite info!{" "}
      </WelcomeMessage>
      <SideImage src="" />
    </PageContainer>
  );
};

export default LandingPage;
