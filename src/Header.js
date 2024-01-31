import React, { useContext } from "react";
import DataContext from "./context/DataContext.js";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";
import useWindowsSize from "./hooks/useWindowsSize.js";

const Header = () => {
  const { title } = useContext(DataContext);
  const { width } = useWindowsSize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : window < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
