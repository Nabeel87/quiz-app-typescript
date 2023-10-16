import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { QuizType } from "./Types/quiz_type";
import QuestionCard from './Components/QuestionCard';


function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const question: QuizType[] = await getQuizDetails(5, "easy");
      console.log(question);
      setQuiz(question);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <QuestionCard
        options ={quiz[0].option} 
        question = {quiz[0].question}/>
    </div>
  );
}

export default App;
