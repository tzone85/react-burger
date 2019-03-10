import React from 'react';

const person  = (props) => {
    // return <p>I'm {props.name} and I'm {(Math.floor(Math.random() * 30))} years old</p>
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    );
};

export default person;