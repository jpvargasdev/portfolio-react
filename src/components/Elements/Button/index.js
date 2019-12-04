import React from "react";
import PropTypes from "prop-types";

// components
import Touchable from "../../Base/Touchable";

// style
import "./button.scss";

const Button = ({ text, variant, animation, onClick }) => (
  <Touchable
    className={`button button-${variant}`}
    type="button"
    variant={animation}
    onClick={onClick}
  >
    {text}
  </Touchable>
);

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  animation: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  text: "",
  variant: "default",
  animation: "zoom",
  onClick: () => true
};

export default Button;
