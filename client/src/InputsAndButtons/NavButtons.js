import React from "react";
import { Logo, SectionLink } from "../Stylings/HeaderStyling";
const NavButtons = () => {
  return (
    <ul>
      <li>
        <SectionLink
          activeClass="active"
          to="LandingPage"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Logo src="https://tinyurl.com/2j9st48w" alt="starwars logo" />
        </SectionLink>
      </li>
      <li>
        <SectionLink
          activeClass="active"
          to="PeoplePage"
          spy={true}
          smooth={true}
          duration={500}
        >
          People
        </SectionLink>
      </li>
      <li>
        <SectionLink
          activeClass="active"
          to="PlanetsPage"
          spy={true}
          smooth={true}
          duration={500}
        >
          Planets
        </SectionLink>
      </li>
      <li>
        <SectionLink
          activeClass="active"
          to="StarshipsPage"
          spy={true}
          smooth={true}
          duration={500}
        >
          Starships
        </SectionLink>
      </li>
    </ul>
  );
};

export default NavButtons;
