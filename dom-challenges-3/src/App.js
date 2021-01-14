import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numOfRows: 3
    }
  }

  handleAddRow = () => {
    let exisitingRows = this.state.numOfRows;
    this.setState({
      numOfRows: exisitingRows + 1
    })
  }

  render() {  
    return (
      <div className="App">
        <button type="button" onClick={this.handleAddRow}>Add a Row</button>
        <Table test = 'testing props' numOfRows = {this.state.numOfRows}></Table>
      </div>
    );
  }
}

export default App;