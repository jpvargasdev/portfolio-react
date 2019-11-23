import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';

import Touchable from '../../Base/Touchable';
import Particles from '../../Base/Particles';
import Menu from '../Menu';

// styles
import './layout.scss';

// constants
const DEFAULT_ICON_PROPS = {
  fontSize:"40px",
  color:"black",
};

const Layout = ({ showParticles, showMenu, showSocial }) => (
  <div>
    {showParticles && <Particles />}
    {showMenu && <Menu />}
    {showSocial && (
      <ul className="layout_social_icons">
        <li className="layout_icon">
          <Touchable variant="zoom">
            <LogoGithub {...DEFAULT_ICON_PROPS}/>
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable variant="zoom">
            <LogoLinkedin {...DEFAULT_ICON_PROPS}/>
          </Touchable>
        </li>
        <li className="layout_icon">
          <Touchable variant="zoom">
            <LogoInstagram {...DEFAULT_ICON_PROPS}/>
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
};

export default memo(Layout);
