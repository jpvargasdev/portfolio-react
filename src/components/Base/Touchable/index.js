import React, { memo } from "react";
import PropTypes from "prop-types";

// style
import "./touchable.scss";

const Touchable = ({ className, onClick, children, animation }) => {
  return (
    <button
      type="button"
      className={`touchable touchable-${animation} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Touchable.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  animation: PropTypes.oneOf(["elevation", "zoom"])
};

Touchable.defaultProps = {
  className: "",
  onClick: () => true,
  children: null,
  animation: "elevation"
};

export default memo(Touchable);
