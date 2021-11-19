import React, { useState, useEffect } from 'react'
import './App.css';

import axios from 'axios';

function App() {

  useEffect(() => {
   fetchData()
  }, [])


  const fetchData = () => {
    axios.get('/api/countries/')
      .then(({data}) => console.log(data))

  }



  return (
    <div className="App">
          merhaba
    </div>
  );
}

export default App;
