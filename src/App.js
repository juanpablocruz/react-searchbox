import React, {useState} from 'react'
import './App.css';

import SearchBox from './lib'


function App() {
  const [value, setValue] = useState(null)
  const pool = ["cat", "dog", "cats", "dogs", "elephant", "jiraff"]
  

  return (
    <div className="App">
      <SearchBox pool={pool} onSelect={setValue} />
      {value && <p>{`You selected: ${value}`}</p>}
    </div>
  );
}

export default App;
