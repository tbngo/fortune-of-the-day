import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Form from './Form.js';
import Fortune from './Fortune.js'
import axios from 'axios';

function App() {
  const [fortune, setFortune] = useState([]);

  const loadFortune = useCallback(() => {
    const apiUrl = 'https://rfwiad0wq8.execute-api.us-east-1.amazonaws.com/beta/fortune'
    axios.get(apiUrl)
    .then((response) => {
      setFortune(response.data);
    });
  }, []);

  useEffect(() => {
    loadFortune();
  }, [loadFortune]);

  return (
    <div className='App'>
      <div className='container'>
        <Form />
        <Fortune fortune={fortune}/>
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by The Ngo.
        </div>
      </footer>
    </div>
  );
}
export default App;
