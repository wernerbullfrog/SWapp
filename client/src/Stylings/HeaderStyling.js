import styled from "styled-components";
import { Link } from "react-scroll";
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
`;

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
    opacity: 0.8;
  }
`;
