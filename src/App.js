import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: ':D'
    }
    this.handleMood = this.handleMood.bind(this);
  }

  handleMood(e) {
    const face = e.currentTarget.value;
    this.setState({
      mood: face
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__face">{this.state.mood}</div>

        <input type="text" onKeyUp={this.handleMood} />
      </div>
    );
  }
}

export default App;
