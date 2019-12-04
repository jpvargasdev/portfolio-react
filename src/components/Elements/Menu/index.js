/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import IosMenu from "react-ionicons/lib/IosMenu";
import IosClose from "react-ionicons/lib/MdClose";
import { Touchable } from "../../Base";

// style
import "./menu.scss";

const Menu = ({ stickyMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const style = `menu_content menu_content-${showMenu ? "open" : "close"}`;
  const menuStyle = `menu_sticky-${stickyMenu}`;
  const Icon = showMenu ? IosClose : IosMenu;
  const iconColor = showMenu ? "white" : "black";
  return (
    <nav className={menuStyle}>
      <div className={style} />
      <Touchable
        onClick={() => setShowMenu(!showMenu)}
        className="menu_button"
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

export default Menu;
