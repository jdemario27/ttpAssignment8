import React from 'react'
import TableCell from './TableCell'

function renderCols (numOfCols) {
    console.log(numOfCols)
    let allCols = []
    for(let i=0; i < numOfCols; i++) {
        console.log("column added")
        allCols.push(<TableCell/>)
    }
    return allCols;
}

function TableRow(props) {
    return (
        <tr className="row">
            {renderCols(props.cols)}
        </tr>
    ) 
}

export default TableRow;