import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h1>Hi, I'm a React app</h1>
            <p>This is actually working</p>
            <Person name = "Mncedi" age = "28"/>
            <Person name = "Thando" age = "32">My Hobbies: Racing</Person>
            <Person name = "Noluthando" age = "30"/>
        </div>
    );

      // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now'));
  }
}

export default App;
