import React, { memo } from "react";
import PropTypes from "prop-types";

// style
import "./project-card.scss";

const ProjectCard = ({ element }) => {
  const { id, title, technologies, appImages } = element.node;
  const backgroundImage = {
    backgroundImage: `url(${appImages[0].file.url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 400,
    width: "100%"
  };

  return (
    <li key={id} style={backgroundImage} className="project-card_item">
      <div className="project-card_content">
        <ul>
          {technologies.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
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
