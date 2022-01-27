import styled from "styled-components";

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

export const TextWrapper = styled.div`
  width: 500px;
  @media (max-width: 1000px) {
    text-align: center;
    width: 300px;
    z-index: 2;
  }
`;

export const SideMessage = styled.h1`
  @media (max-width: 1000px) {
    font-size: 30px;
    font-weight: 400;
    font-size: 40px;
    color: rgba(255, 255, 255, 0.8);
  }
  color: rgba(255, 255, 255, 0.7);
  font-size: 60px;
  font-weight: 100;
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
`;

export const YodaImage = styled.img`
  width: 400px;
  padding: 40px;
  @media (max-width: 1000px) {
    position: absolute;
    opacity: 0.5;
    width: 500px;
  }
`;

export const SideImage = styled.img`
  width: 300px;
  padding: 40px;
  @media (max-width: 1000px) {
    position: absolute;
    opacity: 0.5;
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
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-flow: column wrap;
  width: 500px;
  text-align: center;
  align-items: flex-start;
  overflow: hidden scroll;
  @media (max-width: 1000px) {
    width: 400px;
    flex-direction: column;
    margin: 10px;
    text-decoration: none;
  }
`;

export const ListItem = styled.li`
  font-size: 30px;
  font-weight: 100;
  font-size: 20px;
  padding-right: 100px;
  margin: 5px;
  text-align: center;
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

export const ScrollBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: Rgba(189, 114, 7, 0.6);
  padding: 10px;
  background: none;
  @media (max-width: 1000px) {
    bottom: 100px;
    right: 40%;
    opacity: 1;
    z-index: 100;
  }
  :hover {
    transition: all ease-in-out 0.5s;
    opacity: 0.5;
    border: thin Rgba(189, 114, 7, 0.6) solid;
  }
`;
