import React from 'react';
import "./UserInput.css"

function UserInput(props) {
    return (
        <div className="UserInput">
           <input type="text" onChange={props.onChange} value={props.username}></input>
        </div>
    )
}

export default UserInput;