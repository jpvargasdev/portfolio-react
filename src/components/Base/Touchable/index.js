import React, { memo } from "react";
import PropTypes from "prop-types";

// style
import "./touchable.scss";

const Touchable = ({ className, onClick, children, animation, isDisabled }) => (
  <button
    disabled={isDisabled ? "true" : ""}
    type="button"
    className={`touchable touchable-${animation} ${className} touchable_disabled-${isDisabled}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Touchable.propTypes = {
  animation: PropTypes.oneOf(["elevation", "zoom"]),
  children: PropTypes.node,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

Touchable.defaultProps = {
  animation: "elevation",
  children: null,
  className: "",
  isDisabled: false,
  onClick: () => true
};

export default memo(Touchable);
