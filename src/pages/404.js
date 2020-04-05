import React from "react";

import Seo from "components/Base/Seo";

import NEW404 from "templates/404";

const NotFoundPage = () => (
  <main>
    <Seo title="404: Not found" />
    <NEW404 />
  </main>
);

export default NotFoundPage;
