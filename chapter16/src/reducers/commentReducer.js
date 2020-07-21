import { ADD_COMMENT, DEL_COMMENT } from '../actions/Types'

const initialState = {
  comments: []
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return (event) => {
        event.preventDefault(event)
        state.concat([
          {
            id: Date.now(),
            author: event.target.name.value,
            text: event.target.comment.value,
            date: new Date().toLocaleString()
          }
        ])
      }
    case DEL_COMMENT:
      return state.filter(state => state.id !== action.id)
    default:
      return state
  }
}

export default reducer