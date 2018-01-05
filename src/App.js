import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultInputStyle = {
          'font-size': '1.5em', 
          'background-color': '#CCCDCD', 
          'height': '35px', 
          'border-radius': '5px'}

let fakeServerData = {
  user: {
    name: 'Mia',
    playlists: [
      {
        name: '80s Tunes',
        songs: [
          {name: 'Beat It', duration: 185},
          {name: 'Total Elipse of the Heart', duration: 243},
          {name: 'Thriller', duration: 180}]
      },
      {
        name: 'Some Great Music',
        songs: [
          {name: 'Let It Be', duration: 215},
          {name: 'Blackbird', duration: 242},
          {name: 'Hey Jude', duration: 224}]
      },
      {
        name: 'Party Jams',
        songs: [
          {name: 'Uptown Funk', duration: 286},
          {name: 'Jump On It', duration: 253},
          {name: 'Barracuda', duration: 222}]
      },
      {
        name: 'Mix Tape',
        songs: [
          {name: 'Love is a Battlefield', duration: 240},
          {name: '9th Symphony', duration: 481},
          {name: 'Sonata Pathetique', duration: 532}]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#AB63FB'}}>{this.props.playlists.length} Total Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#AB63FB'}}>{Math.round(totalDuration/60)} Hours of Music</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div>
        <img />
        <input placeholder='Filter this, MOFs...' style={defaultInputStyle} type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return(
      <div style={{width: '25%', display: 'inline-block'}}>
        <img />
        <h3 style={{color: 'whitesmoke'}}>{playlist.name}</h3>
        <ul>
        {playlist.songs.map(song =>
            <li style={{color: 'lightgray'}}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1 style={{color: '#5DB9FF'}}>
            {this.state.serverData.user.name}'s Playlists, Bitches
          </h1>           
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter />
          {this.state.serverData.user.playlists.map(playlist =>
            <Playlist playlist={playlist} />
            )}
          </div>: <h1 style={{color: 'whitesmoke'}}>Keep your pants on, would ya?</h1>
        }
      </div>
    );
  }
}

export default App;
