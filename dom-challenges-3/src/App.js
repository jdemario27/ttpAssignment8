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

  handleRemoveRow=()=>{
    let existingRows=this.state.numOfRows;
    this.setState({
      numOfRows:existingRows-1
    })
  }

  handleRemoveCol=()=>{
    let existingCols=this.state.numOfCols;
    this.setState({
      numOfCols:existingCols-1
    })
  }
 
  render() {  
    return (
      <div className="App">
        <h1>DOM Challenges III with ReactJS</h1>
        <div className="addButtons">
        <button id="ar" type="button" onClick={() => this.handleAddRow()}>Add a Row</button>
        <button id="ac" type="button" onClick={() => this.handleAddCol()}>Add a Column</button>
        </div>
        <br></br>
        <div className="removeButtons">
        <button id="rr" type="button" onClick={()=>this.handleRemoveRow()}>Remove a Row</button>
        <button id="rc" type="button" onClick={()=>this.handleRemoveCol()}>Remove a Column</button>
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