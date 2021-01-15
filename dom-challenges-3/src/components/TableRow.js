import React from 'react'
import TableCell from './TableCell'

function renderCols (numOfCols, newColor) {
    console.log(numOfCols)
    let allCols = []
    for(let i=0; i < numOfCols; i++) {
        console.log("column added")
        allCols.push(<TableCell color={newColor}/>)
    }
    return allCols;
}

function TableRow(props) {
    let newColor = props.color;
    return (
        <tr className="row">
            {renderCols(props.cols, newColor)}
        </tr>
    ) 
}

export default TableRow;