import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { QuizType } from "./Types/quiz_type";
import QuestionCard from './Components/QuestionCard';


function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const question: QuizType[] = await getQuizDetails(5, "easy");
      console.log(question);
      setQuiz(question);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else
      {alert("Quiz Done")
      setCurrentStep(0);}
  }

  if (!quiz.length)
    return <h3>loading...</h3>

  return (
    <div className="App">
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
