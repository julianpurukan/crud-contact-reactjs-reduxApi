import {
  GET_CONTACT_LIST,
  GET_CONTACT_DETAIL,
  POST_CONTACT_CREATE,
  PUT_CONTACT_EDIT
} from '../actions/userAction'

let initialState = {
  getContactList: false,
  errorContactList: false,
  getContactDetail: false,
  errorContactDetail: false,
  getResponDataContact: false,
  errorResponDataContact: false
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_LIST:
      return {
        ...state,
        getContactList: action.payload.data,
        errorContactList: action.payload.errorMessage
      }

    case GET_CONTACT_DETAIL:
      return {
        ...state,
        getContactDetail: action.payload.data,
        errorContactDetail: action.payload.errorMessage
      }

    case POST_CONTACT_CREATE:
      return {
        ...state,
        getResponDataContact: action.payload.data,
        errorResponDataContact: action.payload.errorMessage
      }

    case PUT_CONTACT_EDIT:
      return {
        ...state,
        getResponDataContact: action.payload.data,
        errorResponDataContact: action.payload.errorMessage
      }

    default:
      return state
  }
}

export default users
