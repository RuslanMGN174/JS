import React from "react";

const styles = {

  input: {
    width: "394px"
  },

  textarea: {
    width: "394px",
    height: "100px",
    resize: "none",
  },

  div: {
    marginBottom: "1rem",
    // textAlign: "center"
  },

  label: {
    display: "inline-block",
    marginBottom: ".5rem"
  }
}

export const Form = ({
  onSubmit,
  inputFocus,
  onCancel
}) => {
  return (
    <form onSubmit={onSubmit} >
      <div style={styles.div}>
        <label htmlFor="name">Name</label>
        <input
          style={styles.input}
          placeholder="Enter your Name"
          id="name"
          ref={inputFocus}
        />
      </div>
      <div style={styles.div} >
        <label htmlFor="comment">Comment</label>
        <textarea
          style={styles.textarea}
          id="comment"
        />
      </div>
      <div style={styles.div} >
        <button type="submit" style={styles.button}>OK</button>
        <button style={styles.button}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;