import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      nails: [['DS','Today ive started work at Nail'],['DU','Today iv2e started work at Nail']]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Screen">
          <div className="Container">
            {this.state.nails.map( (nail) => 
              <Nail author={nail[0]} message={nail[1]}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class Nail extends Component {
  render(){
    return(
      <div className="Nail">
        <div className="Author">
          <div className="Avatart"><p>{this.props.author}</p></div>
        </div>
        <div className="Message"><p>{this.props.message}</p></div>
        <div className="Like">
          <div className="HeartSim"/>
        </div>
      </div>
    );
  }
}

export default App;
