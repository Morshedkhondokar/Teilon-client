import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  // Extracts pathname property from the location object
  const { pathname } = useLocation();

  useEffect(() => {
    // when the pathname changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;