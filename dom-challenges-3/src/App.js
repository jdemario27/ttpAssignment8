import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numOfRows: 3,
      numOfCols: 4,
      chosenColor: ''
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
        <h1>DOM Challenges III with ReactJS</h1>
        <div className="buttons">
        <button type="button" onClick={() => this.handleAddRow()}>Add a Row</button>
        <button type="button" onClick={() => this.handleAddCol()}>Add a Column</button>
        </div>
        <br></br>
        <div id="colorMenu">
          <label>Select a color to shade in the cell: </label>
          <select name="colors" id="colors" onChange={(event) => {
            this.setState({
              color: event.target.value
            })
          }}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="lime">Green</option>
            <option value="purple">Purple</option>
            <option value="turquoise">Turquoise</option>
            <option value="lavender">Lavender</option>
          </select>
        </div>
        <br></br>
        <Table className="tbl" 
        numOfCols = {this.state.numOfCols} 
        numOfRows = {this.state.numOfRows}
        color = {this.state.color}
        ></Table>
      </div>
    );
  }
}

export default App;