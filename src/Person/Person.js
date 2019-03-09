import React from 'react';

const person  = (props) => {
    // return <p>I'm {props.name} and I'm {(Math.floor(Math.random() * 30))} years old</p>
    return <p>I'm {props.name} and I'm {props.age} years old</p>
};

export default person;