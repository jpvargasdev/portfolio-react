import React from "react";

// api
import { getHomeData } from 'api';

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Home from "templates/Home";

// styles
import '../styles/index.scss';

const IndexPage = () => {

  const { json } = getHomeData();

  return (
    <main>
      <Layout
        showParticles
        showMenu
        showSocial
      />
      <Seo title="Home" />
      <Home description={json} />
    </main>
  );
};

export default IndexPage;
