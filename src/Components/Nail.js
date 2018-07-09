import React, { Component } from 'react';
import './Nail.css';

class Nail extends Component {
    constructor(props){
        super(props);
        this.state = {className: "Nail"};
    }

    render(){
      return(
        <div className={this.state.className} onClick={this.props.pressCallBack.bind(this, this)}>
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

export default Nail;