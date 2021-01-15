import React from 'react'
import TableRow from './TableRow';

function renderRows (numOfRows, numOfCols, newColor) {
    console.log(numOfRows)
    let allRows = []
    for(let i = 0; i < numOfRows; i++) {
        console.log("row added")
        allRows.push(<TableRow cols={numOfCols} color={newColor}/>)
    }
    return allRows;
}

function Table(props) {
    console.log(props);
    let numOfRows = props.numOfRows;
    let numOfCols = props.numOfCols;
    let newColor = props.color;
    return (
        <table className="table">
            {renderRows(numOfRows, numOfCols, newColor)}
        </table>
    )
}

export default Table;