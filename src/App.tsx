import React, { useEffect } from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service';

function App() {

  useEffect(()=>{
    getQuizDetails(5,"easy");
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
