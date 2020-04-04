/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

// components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chip from "components/Base/Chip";
import Touchable from "components/Base/Touchable";

// images
import AppleStoreBadge from "../../assets/apple-store.svg";
import GooglePlayBadge from "../../assets/play-store.svg";

// styles
import "./project.scss";

// constants
const slideSettigs = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    }
  ]
};

const Project = ({ element }) => {
  const {
    androidUrl,
    images,
    iosUrl,
    resume,
    technologies,
    title,
    webUrl,
  } = element;

  console.log(element);
  return (
    <div className="project_container">
      <h1 className="project_h1">{title}</h1>
      <h2 className="project_p">{resume}</h2>
      <div className="project_buttons">
        <Touchable animation="zoom">
          <h2> Android App </h2>
          <GooglePlayBadge />
        </Touchable>
        <Touchable animation="zoom">
          <h2> iPhone App </h2>
          <AppleStoreBadge />
        </Touchable>
      </div>
      <Slider {...slideSettigs} arrows className="project_container_image">
        {images.map(image => (
          <div>
            <img
              className="project_image"
              alt={image.file.url}
              src={image.file.url}
            />
          </div>
        ))}
      </Slider>
      <section className="project_description">
        <h2 className="project_h2">Technologies:</h2>
        <ul className="project_list_technologies">
          {technologies.map(technology => (
            <li>
              <Chip>{technology}</Chip>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Project.propTypes = {
  description: PropTypes.shape({})
};

Project.defaultProps = {
  description: {}
};

export default Project;
