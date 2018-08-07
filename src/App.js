import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: "",
    showContent: false
  }

  outputChangeHandler = (event) => this.setState({name: event.target.value});

  deleteCharHandler = (index) => {
    const text = this.state.name.split("");
    text.splice(index, 1);
    let newName = text.join("");
    this.setState({name: newName})
  }

  showContentHandler = () => {
    const doesShow = this.state.showContent;
    this.setState({showContent: !doesShow})
  }

  render() {
    let arrayList =
      <div>
        {this.state.name.split('').map((letter, index) => {
          return <Char
            name={letter}
            key={index}
            click={() => this.deleteCharHandler(index)} />
        })}
      </div>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.outputChangeHandler} value={this.state.name}></input>
        <p>Length of input: {this.state.name.length}</p>
        <Validation length={this.state.name.length} />
        {arrayList}
      </div>
    );
  }
}

export default App;
