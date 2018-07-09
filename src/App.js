import React, { Component } from 'react';
import './App.css';
import Feed from './Components/Feed';
import Auth from './Components/Auth';
import firebase from 'firebase';

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
      user: null, 
      loading: true
    };
  } 

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user, loading: false});
    });
  }

  temp_logout(){
    firebase.auth().signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Screen">
          <div className="Container"> 
            {
              this.state.loading ? <p>loading</p>
              : this.state.user ? <Feed/> : <Auth/>
            }
          </div>
          <button onClick={this.temp_logout.bind(this)} style={{float: 'right'}}>temp logout</button>
        </div>
      </div>
    );
  }
}

export default App;
