import React from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col } from 'reactstrap'

const mapStateToProps = (state) => {
  return {
    getContactDetail: state.users.getContactDetail,
    errorContactDetail: state.users.errorContactDetail
  }
}

const DetailUserComponent = (props) => {
  return (
    <Row>
      <Col md='9'>
        <Table striped>
          <tbody>
            <tr>
              <td width='200'>Nama Depan</td>
              <td width='10'>:</td>
              <td>{props.getContactDetail.firstName}</td>
            </tr>
            <tr>
              <td width='200'>Nama Belakang</td>
              <td width='10'>:</td>
              <td>{props.getContactDetail.lastName}</td>
            </tr>
            <tr>
              <td width='200'>Umur</td>
              <td width='10'>:</td>
              <td>{props.getContactDetail.age}</td>
            </tr>

          </tbody>
        </Table></Col>
      <Col>
        
        <Row><img width='250' src={props.getContactDetail.photo} /></Row>

      </Col>
    </Row>

  )
}

export default connect(mapStateToProps, null)(DetailUserComponent)
