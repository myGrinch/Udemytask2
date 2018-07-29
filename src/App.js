import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent'

class App extends Component {
  state = {
      amountOfChars: 0,
      charsString: ''
  };

  countChats = (event) => {
    const newText = event.target.value.length;
    this.setState({
        amountOfChars: newText,
        charsString: event.target.value
    })
  };

  removeChar = (event) => {
      const charsString = [...this.state.charsString];

      charsString.splice(event.target.getAttribute('index'), 1);

      this.setState({
          amountOfChars: charsString.length,
          charsString: charsString.join('')
      })
  };

  render() {
    return (
      <div className="App">
          <input type="text" onChange={(event) => this.countChats(event)} value={this.state.charsString}/>
          <p>{this.state.amountOfChars}</p>
          <Validation countResult={this.state.amountOfChars} />
          <Char chars={this.state.charsString} click={(event) => this.removeChar(event)}/>
      </div>
    );
  }
}

export default App;
