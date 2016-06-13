import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

import Table from '../components/Table'

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
    const headers = {'name': 'Name', 'sector': 'Sector', 'marketCap': 'Market Cap'};
    const table = (businesses.data) ? (<Table {...actions} headers={headers} data={businesses.data} />) : null;
    return (
      <div className={'app'}>
        hgjhg
        {table}
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
