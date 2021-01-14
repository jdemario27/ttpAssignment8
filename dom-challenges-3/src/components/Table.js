import React from 'react'
import TableRow from './TableRow';

function renderRows (numOfRows) {
    console.log(numOfRows)
    let allRows = []
    for(let i = 0; i < numOfRows; i++) {
        console.log("hello")
        allRows.push(<TableRow/>)
    }
    return allRows
}


function Table(props) {
    console.log(props);
    let numOfRows = props.numOfRows;
    return (
        <table className="table">
            {renderRows(numOfRows)}
        </table>
    )
}

export default Table;