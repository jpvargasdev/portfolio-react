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
  <span className="rich_text-bold">{children}</span>
);
const Text = ({ children }) => <p className="rich_text">{children}</p>;

const Hr = () => <br />;

Bold.propTypes = types;
Bold.defaultProps = typesDefault;
Text.propTypes = types;
Text.defaultProps = typesDefault;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HR]: () => <Hr />
  }
};

function renderRichText(json) {
  return documentToReactComponents(json, options);
}

export default renderRichText;
