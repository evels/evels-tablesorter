import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

class HeaderRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, sortedBy, sortedDirection } = this.props;

    const headerRows = data.map(d => {
      const classes = classNames({
        up: (sortedBy) ? sortedBy.toLowerCase() === d.name.replace(' ','').toLowerCase() && sortedDirection === 'ASC' : null,
        down: (sortedBy) ? sortedBy.toLowerCase() === d.name.replace(' ','').toLowerCase() && sortedDirection === 'DESC' : null,
      });
    return <th
      key={d.name}
      className={classes}
      value={d.name}
      onClick={this.props.sortFunc.bind(this, d.name, d.type)}>{d.display}</th>
    });
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
