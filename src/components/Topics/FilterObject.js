import React, { Component } from 'react';


class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unfilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
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
        let unfilteredArray = this.state.unfilteredArray;

        for(var i = 0; i < unfilteredArray.length; i++) {
            if(unfilteredArray[i].hasOwnProperty(obj)) {
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState ({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unfilteredArray) }</span>
                <input className="inputLine" onChange= { (e) => this.userInputUpdate(e.target.value) }></input>
                <button className="confirmationButton" onClick= { () => this.objectFilter(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject;