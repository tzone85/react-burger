import React, { Component } from 'react';
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
        otherState: 'some other value'
    };

    // event Handlers tippically have suffix of Handler
    switchNameHandler = () => {
        // console.log('was clinked');
        // this.state.persons[0].name = "Mncedisi" //done mutate a ... directly react will not allow us to do this

        this.setState({
            persons: [
                {name: "Mncedisi Bhovu", age: 28},
                {name: "Thando", age: 32},
                {name: "Noluthando Mapholoba    ", age: 30}
            ] })
    };

  render() {
    return (
        <div className="App">
            <h1>Hi, I'm a React app</h1>
            <p>This is actually working</p>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
            <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Racing</Person>
            <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
        </div>
    );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now'));
  }
}

export default App;
