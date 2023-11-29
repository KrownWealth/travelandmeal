import { useState, useEffect } from 'react';

const useMenuVisibility = () => {
  const [menuVisibility, setMenuVisibility] = useState({ 
    soupMenu: false, 
    comboMenu: false, 
    riceMenu: false,
    proteinMenu: false,
    snackMenu: false,
  waterMenu: false });

  const handlePreview = (type) => {
    setMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [type]: !prevVisibility[type],
    }));
  };

  useEffect(() => {
    return () => setMenuVisibility({
       soupMenu: false, 
       comboMenu: false,
        riceMenu: false,
        proteinMenu: false,
        snackMenu: false,
      waterMenu: false });
  }, []);

  return [menuVisibility, handlePreview];
};

export default useMenuVisibility;
