import React from "react";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Home from "templates/Home";

// styles
import '../styles/index.scss';

const IndexPage = () => (
  <main>
    <Layout
      showParticles
      showMenu
      showSocial
    />
    <Seo title="Home" />
    <Home />
  </main>
);

export default IndexPage;
