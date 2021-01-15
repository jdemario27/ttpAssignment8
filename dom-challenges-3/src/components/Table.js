import React from 'react'
import TableRow from './TableRow';
import TableCell from './TableCell';

function renderRows (numOfRows, numOfCols) {
    console.log(numOfRows)
    let allRows = []
    for(let i = 0; i < numOfRows; i++) {
        console.log("row added")
        allRows.push(<TableRow cols={numOfCols}/>)
    }
    return allRows;
}

function Table(props) {
    console.log(props);
    let numOfRows = props.numOfRows;
    let numOfCols = props.numOfCols;
    return (
        <table className="table">
            {renderRows(numOfRows, numOfCols)}
        </table>
    )
}

export default Table;