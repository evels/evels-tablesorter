import React, { PropTypes, Component } from 'react'

class HeaderRow extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    console.log(e);
    console.log('hi');
  }

  render() {
    const { data } = this.props;
    const headerRows = [];
    for(var key in data) {
      headerRows.push(<th key={key} value={key} onClick={this.props.sortFunc.bind(this, key)}>{data[key]}</th>)
    }
    return (
      <tr>
        {headerRows}
      </tr>
    )
  }
}

HeaderRow.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HeaderRow
