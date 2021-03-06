import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_CONFIRM_EMAIL_REQUEST,
  USER_CONFIRM_EMAIL_SUCCESS,
  USER_CONFIRM_EMAIL_FAIL,
  USER_ACCOUNT_REQUEST,
  USER_ACCOUNT_SUCCESS,
  USER_ACCOUNT_FAIL,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
  APPLICATION_CREATE_REQUEST,
  APPLICATION_CREATE_SUCCESS,
  APPLICATION_CREATE_FAIL,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { userInfo: null }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userConfirmEmailReducer = (
  state = { emailConfirmed: false },
  action
) => {
  switch (action.type) {
    case USER_CONFIRM_EMAIL_REQUEST:
      return { loading: true, emailConfirmed: false }
    case USER_CONFIRM_EMAIL_SUCCESS:
      return { loading: false, emailConfirmed: true }
    case USER_CONFIRM_EMAIL_FAIL:
      return { loading: false, emailConfirmed: false, error: action.payload }
    default:
      return state
  }
}

export const userAccountReducer = (state = { account: {} }, action) => {
  switch (action.type) {
    case USER_ACCOUNT_REQUEST:
      return { ...state, loading: true }
    case USER_ACCOUNT_SUCCESS:
      return { loading: false, account: action.payload }
    case USER_ACCOUNT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const updateAccountReducer = (state = { account: {} }, action) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_REQUEST:
      return { ...state, loading: true }
    case UPDATE_ACCOUNT_SUCCESS:
      return { loading: false, account: action.payload }
    case UPDATE_ACCOUNT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
