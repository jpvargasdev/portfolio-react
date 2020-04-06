/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

// components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Touchable from "components/Base/Touchable";
import Footer from "components/Elements/Footer";
import renderRichText from "components/Base/RichText";

// images
import AppleStoreBadge from "../../assets/app-store.svg";
import GooglePlayBadge from "../../assets/play-store.svg";
import WebPageBadge from "../../assets/www-page.svg";

// styles
import "./project.scss";

// constants
const slideSettigs = {
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 2000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  centerMode: "center",
  responsive: [
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
  if (!element) return null;
  const {
    about,
    androidUrl,
    images,
    iosUrl,
    introduction,
    technologies,
    title,
    webUrl
  } = element;
  const { json } = about;
  const RichText = renderRichText(json);
  return (
    <div className="project_container">
      <h1 className="project_h1">{title}</h1>
      <p>{introduction}</p>
      <div className="project_buttons-container">
        {androidUrl && (
          <Touchable
            onClick={() => window.open(androidUrl, "_blank")}
            animation="zoom"
            className="project_buttons"
          >
            <h3 className="project_h3">Android</h3>
            <GooglePlayBadge />
          </Touchable>
        )}
        {iosUrl && (
          <Touchable
            onClick={() => window.open(iosUrl, "_blank")}
            animation="zoom"
            className="project_buttons"
          >
            <h3 className="project_h3">iPhone</h3>
            <AppleStoreBadge />
          </Touchable>
        )}
        {webUrl && (
          <Touchable
            onClick={() => window.open(webUrl, "_blank")}
            animation="zoom"
            className="project_buttons"
          >
            <h3 className="project_h3">Web Page</h3>
            <WebPageBadge />
          </Touchable>
        )}
      </div>
      <hr />
      <Slider {...slideSettigs} className="project_container_image">
        {images &&
          images.map(image => (
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
        <h2 className="project_h2">About this project</h2>
        <hr />
        <div className="project_about">{RichText}</div>
      </section>
      <section className="project_description">
        <h2 className="project_h2">Technical Sheet</h2>
        <p>
          Code technologies I got involved with while working on this project.
        </p>
        <hr />
        <ul className="project_list-technologies">
          {technologies.map(technology => (
            <li className="project_list-item">
              <span className="project_list-dot" />
              {technology}
            </li>
          ))}
        </ul>
      </section>
      <Footer />
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
