import React, { Component } from 'react';


class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        };
    }
    
    userInputUpdate(inputUpdate) {
        this.setState ({
            userInput: inputUpdate
        })
    }

    palindromeCheck(str) {
        let ifPalindrome;
        if(str === str.split('').reverse().join('')) {
            ifPalindrome = true;
        } else {
            ifPalindrome = false;
        }
        this.setState ({
            palindrome: ifPalindrome
        });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange = { (e) => this.userInputUpdate(e.target.value) }></input>
                <button className="confirmationButton" onClick= { () => this.palindromeCheck(this.state.userInput) }>Check</button>
                <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) }</span>
            </div>
        )
    }
}

export default Palindrome;