import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <img src={logo} className = "App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" 
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        
        
        >Google doc</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=9xUFnGWWtoQ"
        target="_blank"
        rel="noopener noreferrer"
        color="error"
        >70s</Button>

        <Typography>
          
        </Typography>
        <Button type="sumbit"
        href="https://www.youtube.com/watch?v=VqaKisKIyUo"
        Variant="outlined"
        >80s</Button>
        
        <Button type="sumbit"
        color="secondary" 
        variant="outlined" 
        href="https://www.youtube.com/watch?v=YejxyaFyUHc"
        >90s</Button>

        <Button type="sumbit"
        color="success"
        variant="outlined"
        href="https://www.youtube.com/watch?v=GPgIWIbaifo" 
        >2000s</Button>

        <Button type="contained"
        color="Error"
        variant="outlined"
        href="https://www.youtube.com/watch?v=18DjQ1knr6I"
        >2010s</Button>

        <Button type="contained"
        color="Secondary"
        variant="outlined"
        href="https://www.youtube.com/watch?v=VqBiJqjdTmY"
        >2020s</Button>
        
         

      

        
      </header>
    </div>
  );
}

export default App;
