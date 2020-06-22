import React, { useState } from "react";
import "./Modal.css";


const styles = {
  textarea: {
    // marginLeft: "auto",
    // marginRight: "auto"
    width: "394px",
    height: "100px",
    resize: "none",
  },

  div: {
    marginTop: "10px",
    textAlign: "center"
  },

  button: {
    width: "70px",
    margin: "10px"
  }
}

function submitHandler(event) {
  event.preventDefault();
}

const [value, setValue] = useState("");

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }


  render() {
    return (
      <React.Fragment>
        <a href="#about" onClick={() => this.setState({ isOpen: true })}>New comment</a>
        {this.state.isOpen && (<div className="modal">
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              <div>
                <input
                  placeholder="Enter your Name"
                  value={value}
                  onChange={event => setValue(event.target.value)} />
              </div>
              <div style={styles.div} >
                <textarea
                  style={styles.textarea}
                  placeholder="Enter your comment"
                  value={value}
                  onChange={event => setValue(event.target.value)} />
              </div>
              <div style={styles.div} >
                <button
                  type="submit"
                  style={styles.button}
                  onClick={() => this.setState({ isOpen: false })}>OK</button>
                <button
                  style={styles.button}
                  onClick={() => this.setState({ isOpen: false })}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        )}
      </React.Fragment>
    );
  }
}