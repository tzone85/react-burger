import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    // this (state) can only be done in components for they extend Component
    state = {
        persons: [
            {name: "Mncedi", age: 28},
            {name: "Thando", age: 32},
            {name: "Noluthando", age: 30}
        ],
        otherState: 'some other value',
        showPerson: false
    };

    // event Handlers tipically have suffix of Handler
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1); // splice removes one element from the array
        this.setState({persons: persons});
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Mncedi", age: 28},
                {name: event.target.value, age: 32},
                {name: "Noluthando", age: 30}
            ]
        })
    };

    togglePersonHandler = () => {

        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let person = null;

        if (this.state.showPerson) {
            person = (
            <div>
                {/*using the map function to be executed on every  element of the array*/}
                {this.state.persons.map((person, index) => {
                    return <Person
                                click={() => this.deletePersonHandler(index)}
                                name = { person.name }
                                age={ person.age } />
                })}
            </div>
            );
        }



        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is actually working</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonHandler()}>Switch Name
                </button>
                {person}
            </div>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now'));
    }
}

export default App;
