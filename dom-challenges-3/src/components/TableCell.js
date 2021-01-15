import React from 'react'
export default class TableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellColor: ""
        };
    }
    handleColor = () => {
        this.setState({ 
            cellColor: this.props.color 
        });
    }
    render(){
        console.log(this.props.color)
        return (
            <td className = 'cell'
            style={{backgroundColor: this.state.cellColor}} 
            onClick={this.handleColor}
            >
            </td>
        )
    }
}