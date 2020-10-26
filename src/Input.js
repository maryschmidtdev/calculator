import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <form>
          <label>Number</label>
          <input id="input" type="number"></input>
          <br />
          <label>Add</label>
          <input id="add" type="radio"></input>
          <label>Subtract</label>
          <input id="subtract" type="radio"></input>
          <br />
          <label>Number</label>
          <input id="input" type="number"></input>
        </form>
      </div>
    );
  }
}

export default Input;
