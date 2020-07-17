import React from 'react'
import Modal from '../components/Modal/Modal'
import CommentsList from '../components/Comments/CommentList'
import Context from '../Context'
import { connect } from 'react-redux'
import { addComment, delComment } from '../actions/Actions'

export let App = ({
  comments,
  addComment,
  delComment
}) => {

  return (
    <Context.Provider value={delComment}>
      <div>
        <div className="sidenav">
          <Modal
            onSubmit={addComment}
          />
        </div>
        <div className="main">
          {comments.length
            ? (<CommentsList comments={comments}/>)
            : (<p>No comments yet!</p>)}
        </div>
      </div>
    </Context.Provider>
  )
}

const mapStateToProps = () => {
  return {
    comments: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: () => dispatch(addComment()),
    delComment: (id) => dispatch(delComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = mapStateToProps(() => {
//     try {
//       const item = window.localStorage.getItem(key)
//       return item ? JSON.parse(item) : initialValue
//     } catch (error) {
//       console.log(error)
//       return initialValue
//     }
//   })
//
//   const setValue = value => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value
//       setStoredValue(valueToStore)
//       window.localStorage.setItem(key, JSON.stringify(valueToStore))
//     } catch (error) {
//       console.log(error)
//     }
//   }
//
//   return [storedValue, setValue]
// }