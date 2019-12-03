import React from "react";
import PropTypes from 'prop-types';

// components
import renderRichText from 'components/Base/RichText';

// styles
import './home.scss'

const Home = ({
  description
}) => {
  const RichText = renderRichText(description);
  return (
    <div className='home_container'>
      <button>Go to my projects</button>
    </div>
  )
};

Home.propTypes = {
  description: PropTypes.string,
};

export default Home;
