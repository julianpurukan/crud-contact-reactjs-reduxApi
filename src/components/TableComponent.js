import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Button, Row, Col, Spinner } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { deleteContact } from '../actions/userAction'

const { SearchBar } = Search

const handleClick = (dispatch, id) => {
  swal({
    title: 'Hapus Contact ?',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteContact(id))
        swal('Contact Berhasil Dihapus', {
          icon: 'success'
        })
      } else {
        swal('Contact Tidak Jadi Dihapus')
      }
    })
}

const defaultSorted = [
  {
    dataField: 'id',
    order: 'asc'
  }
]

const mapStateToProps = (state) => {
  return {
    getContactList: state.users.getContactList,
    errorContactList: state.users.errorContactList
  }
}

const TableComponent = (props) => {
  const columns = [
    // {
    //   dataField: 'id',
    //   text: 'ID',
    //   sort: true,
    //   headerStyle: () => {
    //     return { width: '5%' }
    //   }
    // },
    {
      dataField: 'firstName',
      text: 'First Name',
      sort: true
    },
    {
      dataField: 'lastName',
      text: 'Last Name',
      sort: true
    },
    {
      dataField: 'age',
      text: 'Age',
      sort: true
    },
    {
      dataField: 'photo',
      text: 'Photo',
      formatter: (rowContent, row) => {
        return (
          <div>
            <img src={row.photo} width='150' alt='new' />
          </div>
        )
      }
    },
    {
      dataField: 'link',
      text: 'Action',
      headerStyle: () => {
        return { width: '27%' }
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={'detail/' + row.id}>
              <Button color='dark' className='mr-2'>
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={'edit/' + row.id}>
              <Button color='dark' className='mr-2'>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button color='dark' className='mr-2' onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        )
      }
    }
  ]

  return (
    <Container>
      {props.getContactList ? (
        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={props.getContactList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <div className='float-right'>
                    <Link to='/create'>
                      <Button color='dark' className='mr-2'>
                        <FontAwesomeIcon icon={faUserPlus} /> Create Contact
                      </Button>
                    </Link>
                    <SearchBar {...props.searchProps} placeholder='Search ..' />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className='text-center'>
          {props.errorContactList ? (
            <h4>{props.errorContactList}</h4>
          ) : (
            <Spinner color='dark' />
          )}
        </div>
      )}
    </Container>
  )
}

export default connect(mapStateToProps, null)(TableComponent)
