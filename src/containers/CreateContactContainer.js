import React, { Component } from 'react'
import { Container } from 'reactstrap'
import FormComponent from '../components/FormComponent'
import { connect } from 'react-redux'
import { postContactCreate } from '../actions/userAction'
import swal from 'sweetalert'

const mapStateToProps = (state) => {
  return {
    getResponDataContact: state.users.getResponDataContact,
    errorResponDataContact: state.users.errorResponDataContact
  }
}

class CreateContactContainer extends Component {
  handleSubmit (data) {
    this.props.dispatch(postContactCreate(data))
  }

  render () {
    if (this.props.getResponDataContact || this.props.errorResponDataContact) {
      if (this.props.errorResponDataContact) {
        swal(
          'Failed!',
          this.props.errorResponDataContact,
          'error'
        )
      } else {
        swal(
          'Contact Added!',
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
        <h1>Create Contact</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    )
  }
}

export default connect(mapStateToProps, null)(CreateContactContainer)
