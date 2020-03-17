import React from "react";
import PropTypes from "prop-types";

// components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

  console.log(technologies);
  return (
    <div className="project_container">
      <h1 className="project_h1">{title}</h1>
      <Slider
        {...slideSettigs}
        arrows
        className="project_container_image"
      >
        {
          images.map(element => (
            <div>
              <img className="project_image" src={element.file.url} />
            </div>
          ))
        }
      </Slider>
      <section className="project_description">
        <h2 className="project_h2">Technologies:</h2>
        <ul className="project_list_technologies">
          {
            technologies.map(element => (
              <li>
                {element}
              </li>
            ))
          }
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
