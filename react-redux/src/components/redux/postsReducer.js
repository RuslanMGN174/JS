import { CREATE_POST } from './types'

const initialState = {
  posts: [],
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        // 1 способ
        ...state, posts: state.posts.concat(action.payload)

        // 2 способ
        // ...state, posts: [...state.posts, action.payload]
      }
    default: return state
  }
}