import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import * as labels from '../constants/Labels'

import Table from '../components/Table'
import Filter from '../components/Filter'
import Results from '../components/Results'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getBusinessData();
  }

  render() {
    const {
      actions,
      businesses,
    } = this.props;
    let table;
    let results;
    let filters;
    if (businesses.data) {
      table = (<Table
        {...actions}
        headers={labels.HEADERS}
        data={businesses.data}
        sortedBy={businesses.sortedByName}
        sortedDirection={businesses.sortedDirection}
        />);
      const totalBusinesses = businesses.data.length;
      let totalMarketCap = 0;
      for(var i = 0; i < businesses.data.length; i++) {
        totalMarketCap += businesses.data[i].marketCap;
      }
      results = (<Results
          total={totalBusinesses}
          totalMarketCap={totalMarketCap.toFixed(2)} //floating point error problems...
        />);
      filters = (<Filter data={businesses.sectors}/>);
    }

    return (
      <div className={'app'}>
        {table}
        {results}
        {filters}
      </div>
    )
  };
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    businesses: state.businesses,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
