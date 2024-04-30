import React from "react";

function QuestionItem({ question, handleRemoveQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete() {
    const questionId = question.id
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE"
    })
    .then(() => handleRemoveQuestion(questionId))
  }
  function handleUpdate(index) {    
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: index
      })
    })
    .then(response => response.json())
    .then(updatedQuestion => console.log("Updated Question:", updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={e => handleUpdate(e.target.value)}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
