import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import CommentsList from '../components/Comments/CommentList'
import Context from '../Context'

export const App = () => {
  const [comments, setComments] = useLocalStorage('Comments', [])

  const removeComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  const addComment = (event) => {
    event.preventDefault(event)
    setComments(comments.concat([
      {
        id: Date.now(),
        author: event.target.name.value,
        text: event.target.comment.value,
        date: new Date().toLocaleString()
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeComment }}>
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

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}