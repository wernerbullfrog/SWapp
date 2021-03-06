import styled from "styled-components";
import { Link } from "react-scroll";
// all the Header styling is stored in this component

// ************************ DIVs ************************//
export const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

// ************************ UL & LI ************************//
export const LinkList = styled.ul`
  display: flex;
  padding: 10px;
`;

export const ScrollLink = styled.li`
  padding: 10px;
  color: Rgba(189, 114, 7, 0.6);
  font-weight: 100;
  :hover {
    transition: all ease-in 0.2s;
    opacity: 1;
    border-bottom: thin Rgba(189, 114, 7, 1) solid;
  }
  @media (max-width: 1000px) {
    font-size: 15px;
    font-weight: 600;
  }
`;

// ************************ IMGS ************************//
export const Logo = styled.img`
  width: 200px;
  :hover {
    opacity: 0.7;
  }
`;

// ************************ Links ************************//
export const SectionLink = styled(Link)`
  cursor: pointer;
  animation: fadeInAnimation ease 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  :hover {
    opacity: 0.6;
  }
`;
