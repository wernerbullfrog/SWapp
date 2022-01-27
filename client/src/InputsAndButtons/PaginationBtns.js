import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PageBtnLeft, PageBtnRight, BtnWrapper } from "../Stylings/PageStyling";

// these are the search buttons to request
// the "next" page of data from the api
const PaginationBtns = ({
  disabledPrevious,
  disabledNext,
  handlePrevious,
  handleNext,
}) => {
  return (
    <BtnWrapper>
      <PageBtnLeft disabled={disabledPrevious} onClick={handlePrevious}>
        <FiArrowLeft /> Previous
      </PageBtnLeft>
      <PageBtnRight disabled={disabledNext} onClick={handleNext}>
        Next <FiArrowRight />
      </PageBtnRight>
    </BtnWrapper>
  );
};

export default PaginationBtns;
