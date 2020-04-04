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
    {showSocial && (
      <ul className="layout_social_icons">
        <li className="layout_icon">
          <Touchable animation="zoom">
            <a
              href="https://github.com/iClownx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub {...DEFAULT_ICON_PROPS} />
            </a>
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable animation="zoom">
            <a
              href="https://www.linkedin.com/in/juan-vargas-1736649a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin {...DEFAULT_ICON_PROPS} />
            </a>
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable animation="zoom">
            <a
              href="https://www.instagram.com/iclown_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram {...DEFAULT_ICON_PROPS} />
            </a>
          </Touchable>
        </li>
      </ul>
    )}
    {showMenu && <Menu stickyMenu={stickyMenu} />}
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
