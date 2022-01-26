import React from "react";
import { HeaderContainer, Logo } from "./Stylings/HeaderStyling";
const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG9.png"
        alt="starwars logo"
      />
    </HeaderContainer>
  );
};

export default Header;
