import React, { Component } from 'react';

import JeopardyDisplay from './JeopardyDisplay/JeopardyDisplay';

class Jeopardy extends Component {

  state = {
    data: {},
    isLoading: true,
    score: 0,
    userAnswer : "",
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion = (event) => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.io/api/random`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", data);

            //update state with the data from the API causing the page to re-render
            this.setState({
                data: data[0], //grab the first question from the array returned
                isLoading: false,
              });
        })
        //handle any errors/failures with getting data from the API
        .catch((error) => {
            console.log(error)
        });
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
    });
  };
  checkAnswer = (event) => {
    event.preventDefault()

    // let userAnswer = event.target.userAnswer.value;

    if(this.state.userAnswer.toLowerCase() === this.state.data.answer.toLowerCase()) {
      this.setState((state) => ({
        score: state.score + state.data.value,
        userAnswer: ""
      }));

    } else {

      this.setState((state) => ({
        score: state.score - state.data.value,
        userAnswer: ""
      }));
    }

    this.getNewQuestion();
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const { userAnswer } = this.state;
    // if (
    //   currentAnswer.toLowerCase().trim() ===
    //   currentQuestion.correct_answer.toLowerCase()
    // ) {
    //   pointsAdd = this.calculatePoints(currentQuestion);
    // }
  }
  // if value in box lowercase is = data[0].answer then score + data.value 
  // if value in box lowercase isn't data[0].answer then score - data.value

  //display the results on the screen
  render() {
    // let category = "Loading"
    // if(this.state.data.category) {
    //   category = this.state.data.catgory.title
    // }
    return (
      <div>
        {/* Displaying the question to help you get started */}
        {/* <div>Question: {this.state.data.question}</div>
        <div>Value: {this.state.data.value}</div>
        <div>Category: {!this.state.isLoading?this.state.data.category.title:null}</div>
        <div>User Score: {this.state.score}</div>
        <div>
          <form onSubmit={this.checkAnswer}>
          <label>
                Answer: 
                <input type ="text" onChange={this.handleChange}  name="name"/>
          </label>
          <label>
              <input type="submit"  name="submit"/>
          </label>
           </form>
           </div> */}
        <JeopardyDisplay 
        data= {this.state.data}
        isLoading= {this.state.isLoading}
        score = {this.state.score}
        userAnswer = {this.state.userAnswer}
        checkAnswer = {this.checkAnswer}
        handleChange = {this.handleChange}
         />
        
      </div>
    );
  }
}

export default Jeopardy;