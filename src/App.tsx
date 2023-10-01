import React, { useEffect } from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service';

function App() {

  useEffect(()=>{
    async function fetchData() {
      const question = await getQuizDetails(5,"easy"); 
      console.log(question);
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
