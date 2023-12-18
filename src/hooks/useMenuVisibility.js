import { useState, useEffect } from 'react';

const useMenuVisibility = () => {
  const [menuVisibility, setMenuVisibility] = useState({
    soupMenu: false,
    comboMenu: false,
    riceMenu: false,
    proteinMenu: false,
    snackMenu: false,
    waterMenu: false,
  });

  const handlePreview = (type) => {
    setMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type],
    }));
  };

  useEffect(() => {
    // The cleanup function should only reset the state if the component unmounts
    // or if you want to reset the state when the dependencies change.
    // If you don't want to reset the state, remove the cleanup function.

    return () => {
      // Comment out the following line if you don't want to reset the state on unmount
      setMenuVisibility((prevVisibility) => ({
        ...prevVisibility,
        soupMenu: false,
        comboMenu: false,
        riceMenu: false,
        proteinMenu: false,
        snackMenu: false,
        waterMenu: false,
      }));
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return [menuVisibility, handlePreview];
};

export default useMenuVisibility;
