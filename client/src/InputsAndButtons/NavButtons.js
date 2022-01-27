import React from "react";
import {
  Logo,
  SectionLink,
  LinkList,
  ScrollLink,
} from "../Stylings/HeaderStyling";
const NavButtons = () => {
  return (
    <>
      <SectionLink
        activeClass="active"
        to="LandingPage"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Logo src="https://tinyurl.com/2j9st48w" alt="starwars logo" />
      </SectionLink>
      <LinkList>
        <ScrollLink>
          <SectionLink
            activeClass="active"
            to="PeoplePage"
            spy={true}
            smooth={true}
            duration={500}
          >
            Search People
          </SectionLink>
        </ScrollLink>
        <ScrollLink>
          <SectionLink
            activeClass="active"
            to="PeopleListPage"
            spy={true}
            smooth={true}
            duration={500}
          >
            All People
          </SectionLink>
        </ScrollLink>
        <ScrollLink>
          <SectionLink
            activeClass="active"
            to="PlanetsPage"
            spy={true}
            smooth={true}
            duration={500}
          >
            Planets
          </SectionLink>
        </ScrollLink>
        <ScrollLink>
          <SectionLink
            activeClass="active"
            to="StarshipsPage"
            spy={true}
            smooth={true}
            duration={500}
          >
            Starships
          </SectionLink>
        </ScrollLink>
      </LinkList>
    </>
  );
};

export default NavButtons;
