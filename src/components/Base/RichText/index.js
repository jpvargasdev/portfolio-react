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
const Paragraph = ({ children }) => <p className="rich_text rich_text-p">{children}</p>;

const Hr = () => <br />;

const H1 = ({ children }) => (
  <h1 className="rich_text rich_text-h1">{children}</h1>
);
const H6 = ({ children }) => (
  <h6 className="rich_text rich_text-h6">{children}</h6>
);

Bold.propTypes = types;
Bold.defaultProps = typesDefault;
Paragraph.propTypes = types;
Paragraph.defaultProps = typesDefault;
Hr.propTypes = types;
Hr.defaultProps = typesDefault;
H1.propTypes = types;
H1.defaultProps = typesDefault;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HR]: () => <Hr />,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>
  }
};

function renderRichText(json) {
  return documentToReactComponents(json, options);
}

export default renderRichText;
