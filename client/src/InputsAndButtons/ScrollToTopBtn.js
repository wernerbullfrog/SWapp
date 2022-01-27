import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { ScrollBtn } from "../Stylings/PageStyling";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  // this use effect decerns whether to display the button
  // the "back to top" button in reference to its position
  // in the window
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
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
          Back to Top <FiArrowUp />
        </ScrollBtn>
      )}
    </>
  );
};

export default ScrollToTopBtn;
