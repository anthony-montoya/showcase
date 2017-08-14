import React, { Component } from 'react';


class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }

    num1Update(num1Update) {
        this.setState ({
            number1: parseInt(num1Update)
        })
    }
    
    num2Update(num2Update) {
        this.setState ({
            number2: parseInt(num2Update)
        })
    }

    sumMethod() {
        let result = this.state.number1 + this.state.number2;
        this.setState ({
            sum: result
        })

    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"onChange = { (e) => this.num1Update(e.target.value) }></input>
                <input className="inputLine" onChange = { (e) => this.num2Update(e.target.value) }></input>
                <button className="confirmationButton" onClick= { () => this.sumMethod() }>Add</button>
                <span className="resultsBox">Sum: { JSON.stringify(this.state.sum) }</span>
            </div>
        )
    }
}

export default Sum;