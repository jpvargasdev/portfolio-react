/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

// components
import Arrow from "react-ionicons/lib/IosArrowForward";
import Touchable from "../../Base/Touchable";

// style
import "./button.scss";

// constants
const DEFAULT_ICON_PROPS = {
  fontSize: "20px",
  color: "#EF873C"
};

const renderIcon = () => <Arrow {...DEFAULT_ICON_PROPS} />;

const Button = ({ text, variant, animation, onClick, useIcon }) => (
  <Touchable
    className={`button button-${variant}`}
    type="button"
    animation={animation}
    onClick={onClick}
  >
    <>
      {text}
      <div style={{ width: 5 }} />
      {useIcon && renderIcon()}
    </>
  </Touchable>
);

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  animation: PropTypes.string,
  onClick: PropTypes.func,
  useIcon: PropTypes.bool
};
Button.defaultProps = {
  text: "",
  variant: "default",
  animation: "zoom",
  useIcon: false,
  onClick: () => true
};

export default Button;
