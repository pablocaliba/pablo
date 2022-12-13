import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

import "./Navbar.css";
import header_logo from "../../assets/header_logo.png";
// components
import ButtonPrimary from "../Buttons/ButtonPrimary";
import MenuNavBarMobile from "../MenuNavbarMobile/MenuNavbarMobile";

const Navbar = () => {
  const { handleClickOpen, ref } = useContext(AppContext);
  const location = useLocation();

  return (
    <div className="navbar" ref={ref}>
      <Link to={"/"}>
        <img
          src={header_logo}
          alt=""
          className="navbar--logo"
          style={{ display: location?.pathname !== "/" ? "none" : null }}
        />
      </Link>
      <header className="navbar--container">
        <div className="navbar--container-icon-menu">
          <MenuNavBarMobile />
        </div>

        <nav className="navbar--link-content">
          <Link to={"/home"}>
            {" "}
            <p>Home</p>{" "}
          </Link>
          <Link to={"/about"}>
            {" "}
            <p>About</p>{" "}
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://market.gloouds.com/"}
          >
            {" "}
            NFT{" "}
          </a>
          <Link to={"/investor"}>
            {" "}
            <p>Investor</p>{" "}
          </Link>
          <Link to={"/partners"}>
            {" "}
            <p>Partners</p>{" "}
          </Link>
          <Link to={"#"}>
            {" "}
            <p onClick={() => handleClickOpen()}>Contact</p>{" "}
          </Link>
        </nav>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href={"https://app.gloouds.com/login"}
        >
          <ButtonPrimary label="Oportunities" />
        </a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://app.gloouds.com/login"}
          className="buttonPrimaryContainer"
        >
          <ButtonPrimary label="Login" />
        </a>
      </header>
    </div>
  );
};

export default Navbar;
