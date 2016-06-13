import React, { PropTypes, Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const checkboxes = data.sort().map((filter, index) => {
      return <label><input type="checkbox" key={index} value={filter} />{filter}</label>
    });
    return (
      <div>
        {checkboxes}
      </div>
    )
  }
}

Filter.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Filter
