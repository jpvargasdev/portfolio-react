/* eslint-disable react/no-array-index-key */
import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import Chip from "../../Base/Chip";

// style
import "./project-card.scss";

const ProjectCard = ({ element, onClick }) => {
  const { id, technologies, appImages } = element.node;
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
      onClick={() => onClick(element.node)}
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
  }),
  onClick: PropTypes.func,
};

ProjectCard.defaultProps = {
  element: {},
  onClick: null
};

export default memo(ProjectCard);
