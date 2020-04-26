/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo } from "react";
import PropTypes from "prop-types";

// components
import Chip from "../../Base/Chip";

// style
import "./project-card.scss";

const ProjectCard = ({ element, onClick }) => {
  const { id, technologies, appImages } = element.node;

  return (
    <ul
      key={id}
      className="project_card-container"
      type="button"
      onClick={() => onClick(element.node)}
    >
      <li className="project_card-card">
        <img src={appImages[0].file.url} alt="project" />
        <ul>
          {technologies.map(technology => (
            <Chip>{technology}</Chip>
          ))}
        </ul>
      </li>
    </ul>
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
