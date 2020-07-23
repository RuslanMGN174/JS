import { HIDE_MODAL, SHOW_MODAL } from '../actions/Types'

const initialState = {
  isShow: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, isShow: true}
    case HIDE_MODAL:
      return {...state, isShow: false}
    default: return state
  }
}