/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

// components
import IosMenu from "react-ionicons/lib/IosMenu";
import IosClose from "react-ionicons/lib/MdClose";
import { Touchable } from "../../Base";
import Button from "../Button";

// style
import "./menu.scss";

const navigateToRoute = route => {
  navigate(route);
};

const Menu = ({ stickyMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const style = `menu_content menu_content-${showMenu ? "open" : "close"}`;
  const menuStyle = `menu_sticky-${stickyMenu}`;
  const Icon = showMenu ? IosClose : IosMenu;
  const iconColor = showMenu ? "white" : "black";
  return (
    <nav>
      <div className={style}>
        <Button
          text="Home"
          variant="menu"
          onClick={() => navigateToRoute("/")}
        />
        <Button
          text="Works"
          variant="menu"
          onClick={() => navigateToRoute("/works")}
        />
        <Button
          text="Contact"
          variant="menu"
          onClick={() => navigateToRoute("/contact")}
        />
        <Button
          text="About"
          variant="menu"
          onClick={() => navigateToRoute("/about")}
        />
      </div>
      <Touchable
        onClick={() => setShowMenu(!showMenu)}
        className={`menu_button ${menuStyle}`}
        animation="zoom"
      >
        <Icon fontSize="40px" color={iconColor} />
      </Touchable>
    </nav>
  );
};

Menu.propTypes = {
  stickyMenu: PropTypes.bool
};

Menu.defaultProps = {
  stickyMenu: false
};

export default memo(Menu);
