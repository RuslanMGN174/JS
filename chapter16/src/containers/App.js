import React from 'react'
import Modal from '../components/Modal/Modal'
import CommentsList from '../components/Comments/CommentList'
import Context from '../Context'

const App = () => {

  return (
    <Context.Provider>
      <div>
        <div className="sidenav">
          <Modal/>
        </div>
        <div className="main">
          <CommentsList/>
        </div>
      </div>
    </Context.Provider>
  )
}
export default App