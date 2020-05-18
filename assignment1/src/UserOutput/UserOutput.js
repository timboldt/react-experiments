import React from 'react';
import "./UserOutput.css"

function UserOutput(props) {
    return (
        <div className="UserOutput">
            <p>Username:</p>
            <p>{props.username}</p>
        </div>
    )
}

export default UserOutput;