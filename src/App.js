import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultInputStyle = {
          'font-size': '1.5em', 
          'background-color': '#CCCDCD', 
          'height': '35px', 
          'border-radius': '5px'}


class Aggregate extends Component {
  render() {
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#AB63FB'}}>Number and Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div>
        <img />
        <input placeholder='Filter...' style={defaultInputStyle} type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{width: '25%', display: 'inline-block'}}>
        <img />
        <h3 style={{color: 'lightgray'}}>Playlist Name</h3>
        <ul>
          <li style={{color: 'lightgray'}}>Song 1</li>
          <li style={{color: 'lightgray'}}>Song 1</li>
          <li style={{color: 'lightgray'}}>Song 1</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color: '#5DB9FF'}}>Playlists, Bitches</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
