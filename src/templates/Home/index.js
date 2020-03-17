import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

// components
import renderRichText from "components/Base/RichText";
import Button from "components/Elements/Button";

// styles
import "./home.scss";

const navigateToHome = () => {
  navigate("works ");
};

const Home = ({ description }) => {
  const RichText = renderRichText(description);
  return (
    <div className="home_container">
      <div className="home_description">{RichText}</div>
      <div className="home_button">
        <Button
          text="Go to my projects"
          variant="icon"
          animation="elevation"
          onClick={navigateToHome}
          useIcon
        />
      </div>
    </div>
  );
};

Home.propTypes = {
  description: PropTypes.shape({})
};

Home.defaultProps = {
  description: {}
};

export default Home;
