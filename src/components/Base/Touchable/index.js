import React from 'react';
import PropTypes from 'prop-types';

// style
import './touchable.scss';

const Touchable = ({
  className,
  onClick,
  children,
  variant,
}) => {
  let defaultStyle = "touchable_button";
  switch (variant) {
    case 'elevation':
      defaultStyle += "-zoom";
      break;
    case 'zoom':
      defaultStyle += '-zoom';
      break;
    default:
      break;
  }
  return (
    <button
      type="button"
      className={`touchable_button ${defaultStyle} ${className}`}
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
  variant: PropTypes.oneOf(['elevation', 'zoom']),
}

export default Touchable;
