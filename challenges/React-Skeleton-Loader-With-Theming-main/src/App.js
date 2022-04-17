import React, { useContext } from "react";
import Articles from "./Components/Articles";
import User from "./Components/User";
import sun from "./sun.png";
import moon from "./moon.png";
import { UsersContext } from "./Context";
import "./styles.css";

export default function App() {
  const { theme, toggleTheme } = useContext(UsersContext);
  const image = theme === "light" ? sun : moon;

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>React Skeleton Loader with Theming</h1>
        <div className="container">
          <input
            type="image"
            src={image}
            alt=""
            onClick={(ev) => {
              toggleTheme();
            }}
          />
        </div>
      </header>

      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}
