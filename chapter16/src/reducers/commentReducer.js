import { ADD_COMMENT, DEL_COMMENT } from '../actions/Types'

const commentsArray = () => {
  let array = JSON.parse(localStorage.getItem('Comments'))
  return localStorage.length ? array : []
}

const initialState = {
  comments: commentsArray()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state, comments: state.comments.concat(action.payload)
      }
    case DEL_COMMENT:
      return state.filter(comment => comment.id !== action.payload)
    default:
      return state
  }
}

export default reducer