import React, { PropTypes, Component } from 'react'

class HeaderRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const headerRows = data.map(d => <th key={d.name} value={d.name} onClick={this.props.sortFunc.bind(this, d.name, d.type)}>{d.display}</th>);
    return (
      <tr>
        {headerRows}
      </tr>
    )
  }
}

HeaderRow.propTypes = {
  data: PropTypes.array.isRequired,
}

export default HeaderRow
