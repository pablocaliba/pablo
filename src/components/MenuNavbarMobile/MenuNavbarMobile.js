import { useState } from "react";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import "./MenuNavbarMobile.css";
// icons component
import Close from "../Icons/Close";
import BurgerMenu from "../Icons/BurgerMenu";
import MenuItemMobile from "./MenuItemMobile";

const menu_items = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Investor",
    url: "investor",
  },
  {
    name: "Partners",
    url: "partners",
  },
  // , {
  //     name: "Contact",
  //     url: "contact",
  // }
];

const MenuNavBarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div aria-label="open drawer" onClick={() => setOpen(true)}>
        <BurgerMenu />
      </div>
      <SwipeableDrawer
        anchor="left"
        role="presentation"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <section className="makeStyles-list-1">
          <div className="button-close" onClick={() => setOpen(false)}>
            <Close />
          </div>
          {menu_items.map((item, i) => (
            <Link to={`/${item.url}`} onClick={() => setOpen(false)} key={i}>
              <MenuItemMobile item={item.name} key={i} />
            </Link>
          ))}
          <a
            target="_blank"
            href={"https://market.gloouds.com/"}
            rel="noreferrer"
          >
            <MenuItemMobile item={"NFT"} key={"90"} />
          </a>
        </section>
        <span className="span-menu"></span>
      </SwipeableDrawer>
    </div>
  );
};

export default MenuNavBarMobile;
