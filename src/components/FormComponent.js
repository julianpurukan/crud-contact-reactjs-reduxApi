import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { FormGroup, Col, Label, Input, Row, Button } from 'reactstrap'
import UserValidation from '../validations/UserValidation'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning }
}) => (
  <Row>
    <Col md='12'>
      <Label htmlFor='{input}' className='col-form-label'>
        {label}
      </Label>
    </Col>
    <Col md='12'>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
      {touched &&
        ((error && <p style={{ color: 'red' }}>{error}</p>) ||
          (warning && <p style={{ color: 'brown' }}>{warning}</p>))}
    </Col>
  </Row>
)

const mapStateToProps = (state) => {
  return {
    initialValues: {
      firstName: state.users.getContactDetail.firstName,
      lastName: state.users.getContactDetail.lastName,
      age: state.users.getContactDetail.age,
      photo: state.users.getContactDetail.photo
    }
  }
}

class FormComponent extends Component {
  render () {
    console.log('Reasponse', this.state)
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='firstName'
                component={renderField}
                label='Nama Depan :'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='lastName'
                component={renderField}
                label='Nama Belakang :'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type='text'
                name='age'
                component={renderField}
                label='Age :'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type='file'
                name='photo'
                component={renderField}
                label='Photo :'
                input class='form-control'
                id='formFileMultiple'
              />

            </FormGroup>
          </Col>
        </FormGroup>

        <div className='float-right'>
          <Button
            color='dark'
            type='submit'
            disabled={this.props.submitting}
          >
                Submit
          </Button> {''}
          <Link to='/'>
            <Button color='dark'>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>
        </div>
      </form>
    )
  }
}

FormComponent = reduxForm({
  form: 'formCreateUser',
  validate: UserValidation,
  enableReinitialize: true
})(FormComponent)
export default connect(mapStateToProps, null)(FormComponent)
