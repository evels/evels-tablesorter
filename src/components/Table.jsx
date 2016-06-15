import React, { PropTypes, Component } from 'react'
import * as Actions from '../actions'
import HeaderRow from '../components/HeaderRow'
import Row from '../components/Row'

class Table extends Component {
  constructor(props) {
    super(props);
    this._sortBy = this._sortBy.bind(this);
  }

  _sortBy(key, type) {
    const { setData, data, sortedBy, sortedDirection } = this.props;
    let sortedData;
    let direction;
    if (sortedBy === key && sortedDirection === 'ASC') {
      sortedData = (type === 'number') ? data.sort((a, b) => b[key] - a[key]) : data.sort((a, b) => b[key].localeCompare(a[key]));
      direction = 'DESC';
    } else {
      sortedData = (type === 'number') ? data.sort((a, b) => a[key] - b[key]) : data.sort((a, b) => a[key].localeCompare(b[key]));
      direction = 'ASC';
    }
    setData(sortedData, key, direction);
  }

  render() {
    const rows = this.props.data.map((row, index) => {
      return (
        <Row
          key={index}
          rowData={row}
        />
      )
    });
    return (
      <table>
      	<thead>
      		<HeaderRow
            data={this.props.headers}
            sortFunc={this._sortBy}
            sortedBy={this.props.sortedBy}
            sortedDirection={this.props.sortedDirection}/>
      	</thead>
      	<tbody>
      		{rows}
      	</tbody>
      </table>
    )
  }
}

Table.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  sortedBy: PropTypes.string,
  sortedDirection: PropTypes.string,
}

export default Table
