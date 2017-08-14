import React, { Component } from 'react';


class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ["Anthony", "Kegan", "Sam", "Juan", "Rachel", "Kimberlee", "Isaac", "Alex"],
            userInput: "",
            filteredArray: []
        };
    }

    userInputUpdate(inputUpdate) {
        this.setState ({
            userInput: inputUpdate
        })
    }

    objectFilter(obj) {
        let filteredArray = [];
        let unFilteredArray = this.state.unFilteredArray;

        for(var i = 0; i < unFilteredArray.length; i++) {
            if(unFilteredArray[i].includes(obj)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState ({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine" onChange = { (e) => this.userInputUpdate(e.target.value) }></input>
                <button className="confirmationButton" onClick= { () => this.objectFilter(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString;