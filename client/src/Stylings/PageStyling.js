import styled from "styled-components";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 33%,
    rgba(71, 49, 2, 1) 55%,
    rgba(0, 0, 0, 1) 88%,
    rgba(0, 0, 0, 1) 100%
  );
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const BtnContainer = styled.div``;

export const TextWrapper = styled.div`
  width: 500px;
  @media (max-width: 1000px) {
    text-align: center;
    width: 300px;
    z-index: 2;
  }
`;
export const SideMessage = styled.h1`
  color: white;
  font-size: 2em;
  opacity: 0.7;
  animation: fadeInAnimation ease 1s;
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
  @media (max-width: 1000px) {
    font-size: 30px;
    opacity: 1;
  }
`;

export const SideImage = styled.img`
  width: 300px;
  padding: 40px;

  @media (max-width: 1000px) {
    position: absolute;
    opacity: 0.3;
    width: 300px;
    padding: 0px;
  }
`;

export const PeopleSearchInput = styled.input`
  border: 1px solid white;
  color: white;
  border-radius: 5px;
  font-size: 1em;
  padding-left: 10px;
  width: 10em;
  background: none;
  @media (max-width: 1000px) {
  }
`;

export const ResultsContainer = styled.ul`
  background: none;
  border: 1px solid white;
  color: black;
  border-radius: 5px;
  position: relative;
  width: 10em;
  max-height: 25vh;
  overflow: hidden scroll;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1000px) {
    left: 30px;
    background-color: black;
    opacity: 0.6;
    border-top: none;
  }
`;

export const PeopleWrapper = styled.li`
  color: white;
  margin: 5px;
`;
