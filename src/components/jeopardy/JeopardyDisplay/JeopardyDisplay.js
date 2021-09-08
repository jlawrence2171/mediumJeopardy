import React from "react";
import workingJeopardy from "../workingJeopardy";

function JeopardyDisplay(props) {

    return (
        <div className="JeopardyDisplay">
            <div>
        {/* Displaying the question to help you get started */}
        <div>Question: {props.data.question}</div>
        <div>Value: {props.data.value}</div>
        <div>Category Title: {(props.data.category) ? props.data.category.title : null }</div>
        <div>Users Score: {props.score}</div>
        <div>
          Your Answer: 
          <form onSubmit={props.checkAnswer}>
            <input onChange={props.handleChange} type="text" value={props.userAnswer} name="userAnswer"/> {props.userAnswer}
            <button type="submit">Submit your answer</button>
          </form>
        </div>
      </div>
        </div>
    )
}

export default JeopardyDisplay

