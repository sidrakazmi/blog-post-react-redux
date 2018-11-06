import React, { Component } from 'react';
import './App.css';
import NewPost from './components/NewPost';
import AllPosts from './components/AllPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
        <NewPost />
        <AllPosts />
        </header>
      </div>
    );
  }
}

export default App;
