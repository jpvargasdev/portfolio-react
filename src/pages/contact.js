import React from "react";

// components
import { Seo } from "components/Base";
import { Layout } from "components/Elements"

// template
import Contact from "templates/Contact";

// styles
import "../styles/index.scss";

const Contactpage = () => (
  <main>
    <Seo title="Let's Talk | Juan Vargas | Full-Stack Mobile and Web Developer Portfolio" />
    <Contact />
    <Layout showParticles showMenu showSocial />
  </main>
);

export default Contactpage;
