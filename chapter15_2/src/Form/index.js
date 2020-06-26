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

  divCenter: {
    marginBottom: "1rem",
    textAlign: "center"
  },

  label: {
    display: "inline-block",
    marginBottom: ".5rem"
  },

  button: {
    width: "400px",
  }
}

export const Form = ({
  onSubmit,
  inputFocus,
}) => {
  return (
    <form  onSubmit={onSubmit}>
      <div style={styles.div}>
        <label htmlFor="name">Name</label>
        <input style={styles.input} id="name" ref={inputFocus}
        />
      </div>
      <div style={styles.div} >
        <label htmlFor="comment">Comment</label>
        <textarea
          style={styles.textarea}
          id="comment"
        />
      </div>
      <div style={styles.divCenter} >
        <button type="submit" style={styles.button}>Submit</button>
      </div>
    </form>
  );
};

export default Form;