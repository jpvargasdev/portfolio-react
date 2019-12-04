/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";

import Touchable from "../../Base/Touchable";
import Particles from "../../Base/Particles";
import Menu from "../Menu";

// styles
import "./layout.scss";

// constants
const DEFAULT_ICON_PROPS = {
  fontSize: "40px",
  color: "black"
};

const Layout = ({ showParticles, showMenu, showSocial, stickyMenu }) => (
  <div>
    {showParticles && <Particles />}
    {showMenu && <Menu stickyMenu={stickyMenu} />}
    {showSocial && (
      <ul className="layout_social_icons">
        <li className="layout_icon">
          <Touchable animation="zoom">
            <LogoGithub {...DEFAULT_ICON_PROPS} />
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable animation="zoom">
            <LogoLinkedin {...DEFAULT_ICON_PROPS} />
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable animation="zoom">
            <LogoInstagram {...DEFAULT_ICON_PROPS} />
          </Touchable>
        </li>
      </ul>
    )}
  </div>
);

Layout.propTypes = {
  showParticles: PropTypes.bool,
  showMenu: PropTypes.bool,
  showSocial: PropTypes.bool,
  stickyMenu: PropTypes.bool
};

Layout.defaultProps = {
  showParticles: false,
  showMenu: false,
  showSocial: false,
  stickyMenu: false
};

export default memo(Layout);
