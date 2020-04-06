import React from "react";
import PropTypes from "prop-types";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const types = {
  children: PropTypes.shape({})
};
const typesDefault = {
  children: {}
};

const Bold = ({ children }) => (
  <span className="rich_text rich_text-bold">{children}</span>
);
const Paragraph = ({ children }) => <p className="rich_text">{children}</p>;

const Hr = () => <br />;

const H1 = ({ children }) => <h1 className="rich_text">{children}</h1>;

const H2 = ({ children }) => <h2 className="rich_text">{children}</h2>;

const H3 = ({ children }) => <h3 className="rich_text">{children}</h3>;

const H4 = ({ children }) => <h4 className="rich_text">{children}</h4>;

const H5 = ({ children }) => <h5 className="rich_text">{children}</h5>;

const H6 = ({ children }) => <h6 className="rich_text">{children}</h6>;

Bold.propTypes = types;
Bold.defaultProps = typesDefault;
Paragraph.propTypes = types;
Paragraph.defaultProps = typesDefault;
Hr.propTypes = types;
Hr.defaultProps = typesDefault;
H1.propTypes = types;
H1.defaultProps = typesDefault;
H2.propTypes = types;
H2.defaultProps = typesDefault;
H3.propTypes = types;
H3.defaultProps = typesDefault;
H4.propTypes = types;
H4.defaultProps = typesDefault;
H5.propTypes = types;
H5.defaultProps = typesDefault;
H6.propTypes = types;
H6.defaultProps = typesDefault;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HR]: () => <Hr />,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>
  }
};

function renderRichText(json) {
  return documentToReactComponents(json, options);
}

export default renderRichText;
