import React, { PropTypes, Component } from 'react'

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { total, totalMarketCap } = this.props;
    return (
      <div className={'results'}>
        <p><strong>Total:</strong> {total}</p>
        <p><strong>Total Market Cap:</strong> {totalMarketCap}</p>
      </div>
    )
  }
}

Results.propTypes = {
  total: PropTypes.number.isRequired,
  totalMarketCap: PropTypes.string.isRequired,
}

export default Results
