// useDarkMode.js
import React, { useContext, useEffect, useState } from "react";

export const UsersContext = React.createContext();

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
  }, []);

  return (
    <UsersContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UsersContext.Provider>
  );
};

export default AppContext;
