import React, { useEffect, useState } from "react";
import { ListItem, ListWrapper } from "../Stylings/PageStyling";
const ListPagination = ({ List }) => {
  const [nextActive, setNextActive] = useState(false);
  const [previousActive, setPreviousActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(List.data);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (List.data && nextActive) {
      fetch(`${currentPage.next}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("NextPage: ", data);
          setCurrentPage(data);
        });
    } else if (List.data && previousActive) {
      fetch(`${currentPage.previous}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("NextPage: ", data);
          setCurrentPage(data);
        });
    }
  }, [pageNumber]);

  const handleNext = () => {
    setNextActive(true);
    setPreviousActive(false);
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    setNextActive(false);
    setPreviousActive(true);
    setPageNumber(pageNumber - 1);
  };

  console.log("Page Number: ", pageNumber);
  console.log("currentPage: ", currentPage);

  return (
    <>
      <ListWrapper>
        {currentPage &&
          currentPage.results.map((item) => <ListItem>{item.name}</ListItem>)}
      </ListWrapper>

      <div>
        <button disabled={!currentPage.previous} onClick={handlePrevious}>
          Previous
        </button>
        <button disabled={!currentPage.next} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default ListPagination;
