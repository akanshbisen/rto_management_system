import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };
  if (!visible) {
    return false;
  }
  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <i class="zmdi zmdi-chevron-up"></i>
    </div>
  );
};

export default ScrollToTop;
