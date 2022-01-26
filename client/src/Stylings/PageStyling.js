import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SideMessage = styled.h1`
  color: white;
  font-size: 2em;
  opacity: 0.7;
`;

export const TextWrapper = styled.div`
  width: 50vw;
`;

export const SideImage = styled.img`
  width: 24vw;
`;

export const PeopleSearchInput = styled.input`
  border: 1px solid white;
  color: white;
  border-radius: 5px;
  font-size: 1em;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  width: 10em;
  background: none;
`;

export const ResultsContainer = styled.ul`
  background: none;
  border: 1px solid white;
  color: black;
  border-radius: 5px;
  position: absolute;
  width: 10em;
  max-height: 25vh;
  overflow: hidden scroll;
  z-index: 1;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PeopleWrapper = styled.li`
  color: white;
`;
