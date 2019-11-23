import React from "react";
import PropTypes from 'prop-types';

// styles
import './home.scss'

const Home = ({
  description
}) => (
  <div className='home_container'>
    <p>Hola Juan</p>
    <button>Go to my projects</button>
  </div>
);

Home.propTypes = {
  description: PropTypes.string,
};

export default Home;
