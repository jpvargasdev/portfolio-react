import React from "react";
import PropTypes from "prop-types";

// styles
import "./about.scss";

const About = ({
  description,
  image: {
    title,
    file: { url }
  }
}) => (
  <div className="about">
    <div className="about_image">
      <img src={url} alt={title} />
    </div>
    <div className="about_description">{description}</div>
  </div>
);

About.propTypes = {
  description: PropTypes.shape({}),
  image: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  }).isRequired
};

About.defaultProps = {
  description: {}
};

export default About;
