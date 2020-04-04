import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import Touchable from '../Touchable';

// style
import "./chip.scss";

const Chip = ({
  children,
  key,
  onClick,
  selected,
}) => {
  const className = selected ? "chip_container chip_container-selected" : "chip_container";
  if(onClick) {
    return (
      <li key={key} >
        <Touchable className={className} onClick={()=> onClick(children)} animation="zoom">
          {children}
        </Touchable>
      </li>
    );
  }
  return (
    <li key={key} className={className}>
      {children}
    </li>
  );
};

Chip.propTypes = {
  children: PropTypes.string,
  selected: PropTypes.bool,
};

Chip.defaultProps = {
  children: "All",
  selected: false,
};

export default memo(Chip);
