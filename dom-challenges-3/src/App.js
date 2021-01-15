import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numOfRows: 3,
      numOfCols: 3
    }
  }

  handleAddRow = () => {
    let exisitingRows = this.state.numOfRows;
    this.setState({
      numOfRows: exisitingRows + 1
    })
  }

  handleAddCol = () => {
    let exisitingCols = this.state.numOfCols;
    this.setState({
      numOfCols: exisitingCols + 1
    })
  }
 
  render() {  
    return (
      <div className="App">
        <button type="button" onClick={() => this.handleAddRow()}>Add a Row</button>
        <button type="button" onClick={() => this.handleAddCol()}>Add a Column</button>
        <select name="colors" id="colors">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="lime">Green</option>
          <option value="purple">Purple</option>
          <option value="turquoise">Turquoise</option>
        </select>
        <Table numOfCols = {this.state.numOfCols} numOfRows = {this.state.numOfRows}></Table>
      </div>
    );
  }
}

export default App;