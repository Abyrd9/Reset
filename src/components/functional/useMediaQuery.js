import { useState, useEffect } from 'react';

const useMediaQuery = maxWidth => {
  // max-width should be an integer, do a check to make sure
  if (Number.isInteger(maxWidth)) {
    const [windowMatches, setWindowMatches] = useState(null);

    const checkMediaWidth = query => {
      if (query.matches) {
        setWindowMatches(false);
      } else {
        setWindowMatches(true);
      }
    };

    const query = window.matchMedia(`(max-width: ${maxWidth.toString()}px)`);

    useEffect(() => {
      checkMediaWidth(query);
      query.addListener(checkMediaWidth);
      return () => {
        query.removeListener(checkMediaWidth);
      };
    });

    return windowMatches;
  }
};

export default useMediaQuery;
