import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])
  function handleRemoveQuestion(deletedQuestionId) {
    setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== deletedQuestionId));
  }

  let displayQuestions = questions.map(question => {
    return <QuestionItem key= {question.id} question={question} handleRemoveQuestion={handleRemoveQuestion}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {displayQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
