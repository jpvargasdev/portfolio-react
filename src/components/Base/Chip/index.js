import React from "react";
import PropTypes from "prop-types";

// style
import "./chip.scss";

const Chip = ({
  children
}) => (
  <li className="chip_container">
    {children}
  </li>
);

Chip.propTypes = {
  children: PropTypes.string
};

Chip.defaultProps = {
  text: ""
};

export default Chip;
