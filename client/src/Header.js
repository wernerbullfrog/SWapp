import React from "react";
import { HeaderContainer, Logo } from "./Stylings/HeaderStyling";
const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-black-and-white.png"
        alt="starwars logo"
      />
    </HeaderContainer>
  );
};

export default Header;
