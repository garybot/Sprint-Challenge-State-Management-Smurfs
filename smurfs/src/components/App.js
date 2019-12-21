import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getSmurfs } from '../actions/actions.js';
import SmurfList from './SmurfList.js';
import SmurfForm from './SmurfForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={() => {this.props.getSmurfs()}}>Get Smurfs</button>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps, {getSmurfs})(App);
