import React, { Component } from 'react';
import './App.css';
import Feed from './Components/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Screen">
          <div className="Container">            
            <Feed/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
