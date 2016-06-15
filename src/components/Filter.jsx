import React, { PropTypes, Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const checkboxes = [];
    for (var key in data) {
      checkboxes.push(<label key={key}><input
        type="checkbox"
        value={key}
        checked={data[key]}
        onChange={this.props.handleChecked.bind(this, key)}/>{key}</label>);
    }
    return (
      <div>
        {checkboxes}
      </div>
    )
  }
}

Filter.propTypes = {
  data: PropTypes.object.isRequired,
  handleChecked: PropTypes.func.isRequired,
}

export default Filter
