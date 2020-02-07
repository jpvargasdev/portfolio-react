/* eslint-disable react/no-array-index-key */
import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import Chip from "../../Base/Chip";

// style
import "./project-card.scss";

const ProjectCard = ({ element }) => {
  const { id, title, technologies, appImages } = element.node;
  const backgroundImage = {
    backgroundImage: `url(${appImages[0].file.url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <li
      key={id}
      className="project-card_item"
      style={backgroundImage}
      type="button"
    >
      <ul className="project-card_content">
        {technologies.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </ul>
    </li>
  );
};

ProjectCard.propTypes = {
  element: PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      technologies: PropTypes.shape([]),
      appImages: PropTypes.shape({})
    })
  })
};

ProjectCard.defaultProps = {
  element: {}
};

export default memo(ProjectCard);
