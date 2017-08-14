import React, { Component } from 'react';


class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        };
    }

     userInputUpdate(inputUpdate) {
            this.setState ({
                userInput: inputUpdate
            })
        }

        updateArray(numStr) {
            let evens = [];
            let odds = [];
            let numSplit = numStr.split(",");
            for(var i = 0; i < numSplit.length; i++) {
                if(numSplit[i] % 2 === 0) {
                    evens.push(parseInt(numSplit[i]));
                } else {
                    odds.push(parseInt(numSplit[i]));
                }
            }
            this.setState ({
                evenArray: evens,
                oddArray: odds
            })
        }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange= { (e) => this.userInputUpdate(e.target.value) }></input>
                <button className="confirmationButton" onClick= { () => this.updateArray(this.state.userInput) }>Split</button>
                <span className="resultsBox">Even Array: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">Odd Array: {JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd;