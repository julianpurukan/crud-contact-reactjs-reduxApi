import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { connect } from 'react-redux'
import { getContactList, deleteDataContact } from '../actions/userAction'

class HomeContainer extends Component {
  componentDidMount () {
    this.props.dispatch(getContactList())
    this.props.dispatch(deleteDataContact())
  }

  render () {
    return (
      <div>
        <TableComponent />
      </div>
    )
  }
}

export default connect()(HomeContainer)
