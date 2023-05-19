import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.defaultColor,
        };
    }




    handleClick = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'red' ? 'blue' : 'red',
        }));
    };
    render() {
        const {color} = this.state;
        return (
            <div className="square"
                 style={{ backgroundColor: color }}
                 onClick={this.handleClick}
            />
        );
    }
}




class Color extends React.Component {
    render() {
        return (
            <div>
                <Square defaultColor="red" />
                <Square defaultColor="blue" />
            </div>
        );
    }
}




export default Color;
