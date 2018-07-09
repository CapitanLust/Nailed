import React, { Component } from 'react';
import { auth } from 'firebase';
import './Auth.css';

class Auth extends Component {
  constructor(props){super(props);}

  signIn(provider){      
      //var provider = new auth.GoogleAuthProvider();      
      auth().signInWithPopup(provider);
  }
    
  render() {
    auth().setPersistence(auth.Auth.Persistence.LOCAL);

    return <div>
        <h2>Sign in with:</h2>
        <div className="SignWithBtn" onClick={this.signIn.bind(this, new auth.GoogleAuthProvider())}>
            Google</div>
        <div className="SignWithBtn" onClick={this.signIn.bind(this, new auth.FacebookAuthProvider())}>
            Facebook</div>
        <div className="SignWithBtn" onClick={this.signIn.bind(this, new auth.TwitterAuthProvider())}>
            Twitter</div>
    </div>;
  }
}

export default Auth;
