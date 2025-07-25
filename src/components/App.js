import React, { useState,useEffect } from "react";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);


  useEffect(()=>{
    fetch("http://localhost:3000/questions")
    .then((res)=> res.json())
    .then((data)=>{
      setQuestions(data);
    })

  },[]);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }
  function handleDeleteQuestion(id){
    setQuestions(questions.filter((question) => question.id !== id));
  }
  function handleUpdateQuestion(updatedQuestion) {
    setQuestions(questions.map(q=>q.id === updatedQuestion.id? updatedQuestion : q));
  }



  return (
    <div>
      <h1>Quiz Manager </h1>
      <QuestionForm onAddQuestion={handleAddQuestion}/>
      <QuestionList
        questions={questions}
        onDelete={handleDeleteQuestion}
        onUpdate={handleUpdateQuestion}/>
    </div>
  );
}
   
   
 
export default App;
