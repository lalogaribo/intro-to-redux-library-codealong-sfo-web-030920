import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick = (event) => {
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <h3>Welcome {this.props.username}</h3>
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
        <input
          type="text"
          placeholder="Type new name here..."
          onChange={this.props.changeName}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    username: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({ type: "INCREASE_COUNT" }),
    changeName: (e) =>
      dispatch({ type: "CHANGE_NAME", payload: { name: e.target.value } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
