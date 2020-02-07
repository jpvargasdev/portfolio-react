import React from "react";

// components
import Chip from 'components/Base/Chip';

// const
const technologies = ["React", "Java", "Android"];

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter filter_container">
        {technologies.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </div>
    );
  }
}

export default Filter;
