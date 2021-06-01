import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import FormComponent from '../components/FormComponent'
import { getContactDetail, putContactUpdate } from '../actions/userAction'
import swal from 'sweetalert'

const mapStateToProps = (state) => {
  return {
    getResponDataContact: state.users.getResponDataContact,
    errorResponDataContact: state.users.errorResponDataContact
  }
}

class EditContactContainer extends Component {
  componentDidMount () {
    this.props.dispatch(getContactDetail(this.props.match.params.id))
  }

  handleSubmit (data) {
    this.props.dispatch(putContactUpdate(data, this.props.match.params.id))
  }

  render () {
    if (this.props.getResponDataContact || this.props.errorResponDataContact) {
      if (this.props.errorResponDataContact) {
        swal('Failed!', this.props.errorResponDataContact, 'error')
      } else {
        swal(
          'Contact Updated!',
          'Nama : ' +
            this.props.getResponDataContact.firstName +
            ' , Umur : ' +
            this.props.getResponDataContact.age,
          'success'
        )
      }
    }
    return (
      <Container>
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(EditContactContainer)
