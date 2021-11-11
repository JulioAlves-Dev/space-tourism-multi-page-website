import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./../assets/shared/logo.svg";
import { ReactComponent as Close } from "./../assets/shared/icon-close.svg";
import { ReactComponent as Hamburger } from "./../assets/shared/icon-hamburger.svg";

const Header = () => {
  const NavActive = {
    borderColor: "white",
  };

  const [menu, setMenu] = React.useState(false);

  const loc = useLocation();

  React.useEffect(() => {
    setMenu(false);
  }, [loc]);

  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.Logo}>
        <img src={Logo} alt="Logo" />
      </Link>
      <button className={styles.Menu} onClick={() => setMenu(true)}>
        <Hamburger />
      </button>
      <div className={styles.Row}></div>
      <nav className={`${styles.Nav} ${menu ? styles.OpenMenu : ""}`}>
        <button
          className={styles.NavButtonClose}
          onClick={() => setMenu(false)}
        >
          <Close />
        </button>
        <ul>
          <li>
            <NavLink to="/" end className="nav-text" activeStyle={NavActive}>
              <span>00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="destination"
              className="nav-text"
              activeStyle={NavActive}
            >
              <span>01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="crew" className="nav-text" activeStyle={NavActive}>
              <span>02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="technology"
              className="nav-text"
              activeStyle={NavActive}
            >
              <span>03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
