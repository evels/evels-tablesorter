import React, { PropTypes, Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { total, totalMarketCap } = this.props;
    return (
      <div>
        <p>Total: {total}</p>
        <p>Total Market Cap: {totalMarketCap}</p>
      </div>
    )
  }
}

Results.propTypes = {
  total: PropTypes.number.isRequired,
  totalMarketCap: PropTypes.string.isRequired,
}

export default Results
