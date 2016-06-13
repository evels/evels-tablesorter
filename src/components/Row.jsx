import React, { PropTypes, Component } from 'react'

class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { rowData } = this.props;
    return (
      <tr>
        <td>{rowData.name}</td>
        <td>{rowData.sector}</td>
        <td>{rowData.marketCap}</td>
      </tr>
    )
  }
}

Row.propTypes = {
  rowData: PropTypes.object.isRequired,
}

export default Row
