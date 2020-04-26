import React from "react";
import propTypes from "prop-types";

// components
import Chip from 'components/Base/Chip';

// constants
import tech from "config/constants";

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      technologies: tech,
      selected: 'All'
    };
  }

  onChipClicked = (item) => {
    const { onFilterChange } = this.props;
    this.setState({ selected: item });
    onFilterChange(item);
  }

  render() {
    const { technologies, selected } = this.state;
    return (
      <ul className="filter_container">
        {technologies.map((item, index) => (
          <Chip
            onClick={this.onChipClicked}
            selected={item.name === selected}
            key={index}>{item.name}
          </Chip>
        ))}
      </ul>
    );
  }
}

Chip.propTypes = {
  technologies: propTypes.arrayOf(propTypes.string),
  onFilterChange: propTypes.func,
};

Chip.defaultProps = {
  technologies: [],
  onFilterChange: () => {},
};

export default Filter;
