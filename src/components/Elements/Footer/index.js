import React from "react";

// style
import "./footer.scss";

const Footer = () => (
  <footer className="footer_container">
    <h3>Let&apos;s Talk</h3>
    <p>Wanna get in touch or talk about a project?</p>
    <p>
      Feel free to contact me via email at
      <span>
        <a href="mailto:vargasm.jp@gmail.com"> vargasm.jp@gmail.com</a>
      </span>
    </p>
    <p>
      or drop a line in the form at the
      <span>
        <a href="/contact"> contact page</a>
      </span>
    </p>
  </footer>
);

export default Footer;
