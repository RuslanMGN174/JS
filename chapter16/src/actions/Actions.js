import { ADD_COMMENT, DEL_COMMENT } from './Types'

export const addComment = () => {
  return {
    type: ADD_COMMENT
  }
}

export const delComment = (id) => {
  return {
    type: DEL_COMMENT,
    id
  }
}