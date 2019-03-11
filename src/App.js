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

    // event Handlers tippically have suffix of Handler
    switchNameHandler = (newName) => {
        // console.log('was clinked');
        // this.state.persons[0].name = "Mncedisi" //done mutate a ... directly react will not allow us to do this

        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Thando", age: 32},
                {name: "Noluthando", age: 30}
            ]
        })
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

        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is actually working</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonHandler()}>Switch Name</button>
                {
                    // display the persons components when showPerson is true
                    this.state.showPerson === true ?
                    <div>
                        <Person name={this.state.persons[0].name}
                                age={this.state.persons[0].age}/>
                        <Person name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, "Mncedisi Bhovu")}
                                changed = {this.nameChangedHandler}>My Hobbies: Racing</Person>
                        <Person name={this.state.persons[2].name}
                                age={this.state.persons[2].age}/>
                    </div> : null
                }

            </div>
        );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now'));
    }
}

export default App;
