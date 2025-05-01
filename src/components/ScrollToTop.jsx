import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Gets the current location (route)

  useEffect(() => {
    // Scrolls to the top whenever the location changes (i.e., route changes)
    window.scrollTo(0, 0);
  }, [location]); // Dependency array makes sure it runs when location changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
