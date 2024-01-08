"use client"
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
    return () => {
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
