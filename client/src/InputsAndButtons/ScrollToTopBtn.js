import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { ScrollBtn } from "../Stylings/PageStyling";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 640) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <ScrollBtn onClick={scrollToTop}>
          <FiArrowUp />
        </ScrollBtn>
      )}
    </>
  );
};

export default ScrollToTopBtn;
