import React, { Component } from 'react';

import JeopardyDisplay from '../jeopardy/JeopardyDisplay/JeopardyDisplay';

class Jeopardy extends Component {

  state = {
    data: {},
    score: 0,
    userAnswer: ""
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.io/api/random`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turnig the response into JSON (data we can work with), lets add that data to state
        .then((potato) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", potato);

            //update state with the data from the API causing the page to re-render
            this.setState({
                data: potato[0] //grab the first question from the array returned
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

  checkAnswer = (event) => {
    //dont reload the page like you would normally with a onSubmit event
    event.preventDefault()

    if(this.state.userAnswer.toLowerCase() === this.state.data.answer.toLowerCase()){

      this.setState((state) => ({
       score: state.score + state.data.value,
       userAnswer: ""
      }));

    }else{

      this.setState((state) => ({
        score: state.score - state.data.value,
        userAnswer: ""
       }));

    }

    this.getNewQuestion()

  }

  handleChange = (event) => {
    //keep state updated with the values typed into the form
    this.setState({userAnswer: event.target.value});
}

  //display the results on the screen
  render() {

    return (
      <div>
          <JeopardyDisplay 
          jeopardyData={this.state.data} 
          score={this.state.score}
          checkAnswer={this.checkAnswer} 
          handleChange={this.handleChange}
          userAnswer={this.state.userAnswer}
          />
          {/* <JeopardyDisplay 
          jeopardyData={this.state.data} 
          score={this.state.score}
          checkAnswer={this.checkAnswer} 
          handleChange={this.handleChange}
          userAnswer={this.state.userAnswer}
          />
          <JeopardyDisplay 
          jeopardyData={this.state.data} 
          score={this.state.score}
          checkAnswer={this.checkAnswer} 
          handleChange={this.handleChange}
          userAnswer={this.state.userAnswer}
          /> */}
      </div>
    );
  }
}

export default Jeopardy;