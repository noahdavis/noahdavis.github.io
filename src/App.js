import React, {Component} from "react";
import Form from "./Form";

class App extends Component {
  state = {
    prompts: [
      {
        prompt: "A squirrel, trying to get its __ __ __",
        answer: "nut"
      },
      {
        prompt: "Let's watch a __ __ __ __ __ __ __",
        answer: "shmovie"
      },
      {
        prompt: "Barb is a __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ (all one word)",
        answer: "motherfuckingbitch"
      },
      {
        prompt: "Imma take a __ __ __ right here",
        answer: "nap"
      },
      {
        prompt: "What you say when you get an idea: __ __ __ __ __ __ __ __ __",
        answer: "lightbulb"
      },
      {
        prompt: "You got them all! Proud of you. The secret code is 'mac and mancos' to prove you actually got to the end"
      }
    ],
    currentPrompt: 0,
    correctAnswer: false,
    incorrectAnswer: false,
  }

  handleSubmit = (response) => {
    if (response.answer === this.state.prompts[this.state.currentPrompt].answer)
    {
      this.setState({incorrectAnswer: false});
      if (this.state.currentPrompt !== (this.state.prompts.length - 2))
      {
        this.setState({correctAnswer: true});
      }
      
      this.setState({currentPrompt: this.state.currentPrompt + 1})
    }
    else{
      this.setState({incorrectAnswer: true});
      this.setState({correctAnswer: false});
    }
  }

  render() {
    const { prompts } = this.state

    return (
      <div className="App">
        <h1>Fill in the correct blank! (all lowercase please)</h1>
        {(this.state.currentPrompt < (this.state.prompts.length - 1)) && <h2>{prompts[this.state.currentPrompt].prompt}</h2>}
        {(this.state.currentPrompt < (this.state.prompts.length - 1)) &&<Form handleSubmit={this.handleSubmit} />}
        {(this.state.currentPrompt === (this.state.prompts.length - 1)) &&<h2>{prompts[this.state.currentPrompt].prompt}</h2>}
        {(this.state.currentPrompt < (this.state.prompts.length - 1)) && <h3>Question {this.state.currentPrompt + 1}/{this.state.prompts.length-1}</h3>}
        {this.state.correctAnswer && <h3>Correct!</h3>}
        {this.state.incorrectAnswer && <h3>Try again!</h3>}
      </div>
    )
  }
}

  export default App