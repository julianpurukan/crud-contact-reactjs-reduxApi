import axios from 'axios'

export const GET_CONTACT_LIST = 'GET_CONTACT_LIST'
export const GET_CONTACT_DETAIL = 'GET_CONTACT_DETAIL'
export const POST_CONTACT_CREATE = 'POST_CONTACT_CREATE'
export const PUT_CONTACT_EDIT = 'PUT_CONTACT_EDIT'

export const getContactList = (data) => {
  return (dispatch) => {
    axios
      .get(
        'https://my-json-server.typicode.com/julianpurukan/react-redux-api-jsonserver/contact'
      )
      .then(function (response) {
        dispatch({
          type: GET_CONTACT_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_CONTACT_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const getContactDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        'https://my-json-server.typicode.com/julianpurukan/react-redux-api-jsonserver/contact/' +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_CONTACT_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_CONTACT_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const postContactCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        'https://my-json-server.typicode.com/julianpurukan/react-redux-api-jsonserver/contact',
        data
      )
      .then(function (response) {
        console.log(response)

        dispatch({
          type: POST_CONTACT_CREATE,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: POST_CONTACT_CREATE,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const putContactUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        'https://my-json-server.typicode.com/julianpurukan/react-redux-api-jsonserver/contact/' + id,
        data
      )
      .then(function (response) {
        console.log(response)

        dispatch({
          type: PUT_CONTACT_EDIT,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: PUT_CONTACT_EDIT,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const deleteContact = (id) => {
  return (dispatch) => {
    axios
      .delete(
        'https://my-json-server.typicode.com/julianpurukan/react-redux-api-jsonserver/contact/' + id
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const deleteDataContact = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CONTACT_DETAIL,
      payload: {
        data: false,
        errorMessage: false
      }
    })

    dispatch({
      type: POST_CONTACT_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }
}
