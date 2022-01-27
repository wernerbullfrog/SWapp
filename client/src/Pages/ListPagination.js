import React, { useEffect, useState } from "react";
import PaginationBtns from "../InputsAndButtons/PaginationBtns";
import { ListItem, ListWrapper } from "../Stylings/PageStyling";
// this component contains all the logic necessary to fetch
// and render the "next" & "previous" pages of IoInformationSharp
// depending on the original api request

const ListPagination = ({ List }) => {
  const [nextActive, setNextActive] = useState(false);
  const [previousActive, setPreviousActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(List.data);
  const [pageNumber, setPageNumber] = useState(1);
  // this useEffect determines whether the data from the props
  // has been loaded and if the "next button" is activated. if so it will
  // will use the "next" value of the List data received from the SWapi
  // to fetch and render the "next" page of data
  // else it will use the "previous" value of the List data received.
  useEffect(() => {
    if (List.data && nextActive) {
      fetch(`${currentPage.next}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentPage(data);
        });
    } else if (List.data && previousActive) {
      fetch(`${currentPage.previous}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentPage(data);
        });
    }
  }, [pageNumber]);
  // simple handlers to trigger the useEffect above.

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

  return (
    <>
      {currentPage && (
        <>
          <ListWrapper>
            {currentPage.results.map((item) => (
              <ListItem>{item.name}</ListItem>
            ))}
          </ListWrapper>

          <PaginationBtns
            disabledPrevious={!currentPage.previous}
            disabledNext={!currentPage.next}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </>
      )}
    </>
  );
};

export default ListPagination;
