import React from 'react';

function Person(props) {
    return (
        <div className="Person">{props.name} (Age: {props.age})</div>
    )
}

export default Person;