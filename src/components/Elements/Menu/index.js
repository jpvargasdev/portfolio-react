import React, {useState} from 'react';

// components
import IosMenu from 'react-ionicons/lib/IosMenu';
import { Touchable } from '../../Base';

// style
import './menu.scss';

// constants
const DEFAULT_ICON_PROPS = {
  fontSize:"40px",
  color:"black",
};

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const style = `menu_content menu_content-${showMenu ? "open" : "close"}`;
  return (
    <nav>
      <div className={style}>
      </div>
      <Touchable
        onClick={() => setShowMenu(!showMenu)}
        className="menu_button"
        variant="elevation"
      >
        <IosMenu {...DEFAULT_ICON_PROPS}/>
      </Touchable>
    </nav>
  );
}

export default Menu;
