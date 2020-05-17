import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

function App() {
  const [username, setUsername] = useState("unknown");
  return (
    <div className="App">
      <UserInput username={username} onChange={(event) => setUsername(event.target.value)}/>
      <UserOutput username={username}/>
    </div>
  );
}

export default App;
