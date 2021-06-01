import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getContactDetail } from '../actions/userAction'
import DetailContactComponent from '../components/DetailContactComponent'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
class DetailContactContainer extends Component {
  componentDidMount () {
    this.props.dispatch(getContactDetail(this.props.match.params.id))
  }

  render () {
    return (
      <Container>
        <h1>Detail Contact</h1>
        <DetailContactComponent />
        <div className='float-right'>
          <Link to='/'>
            <Button color='dark'>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>
        </div>
      </Container>
    )
  }
}

export default connect()(DetailContactContainer)
