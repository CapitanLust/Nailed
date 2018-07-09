import React, { Component } from 'react';
import './Feed.css';
import firebase from 'firebase';
import Nail from './Nail';

var config = {
  apiKey: "AIzaSyDfE5xBKUU-4vcbg3G3gnnhBwDT73MfJlI",
  authDomain: "nailed-7abe9.firebaseapp.com",
  databaseURL: "https://nailed-7abe9.firebaseio.com",
  storageBucket: "nailed-7abe9.appspot.com",
};
firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super();
    this.state = {
      nails: [['DS','Today ive started work at Nail'],['DU','Today iv2e started work at Nail']],
      expandedNail: null
    };
  }

  a(nail){
    if(this.expandedNail!=null) this.expandedNail.setState({className: "Nail"});

    if(this.expandedNail != nail){
      this.expandedNail = nail;
      this.expandedNail.setState({className: "Nail Expanded"});
    }else{
      this.expandedNail.setState({className: "Nail"});
      this.setState({expandedNail: null});
    }
  }

  render() {
    return (this.state.nails.map( (nail) => 
              <Nail author={nail[0]} message={nail[1]} pressCallBack={this.a.bind(this)}/>
            ));
  }
}

export default App;
