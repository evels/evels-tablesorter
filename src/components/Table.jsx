import React, { PropTypes, Component } from 'react'
import * as Actions from '../actions'
import HeaderRow from '../components/HeaderRow'
import Row from '../components/Row'

class Table extends Component {
  constructor(props) {
    super(props);
    this._sortBy = this._sortBy.bind(this);
  }

  _sortBy(key) {
    console.log(key);
    const { setData, data } = this.props;
    const sorted = data.sort((a, b) => a[key].localeCompare(b[key]));
    setData(sorted);
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
      <div>
        <button onClick={() => this._sortBy('sector')}>click me</button>
          <table>
          	<thead>
          		<HeaderRow data={this.props.headers} sortFunc={this._sortBy}/>
          	</thead>
          	<tbody>
          		{rows}
          	</tbody>
          </table>

      </div>
    )
  }
}

Table.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  headers: PropTypes.object.isRequired,
}

export default Table
