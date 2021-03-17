import React, {Component} from "react"

class Form extends Component {
    initialState = {
        answer: ""
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { answer } = this.state;

        return (
            <form>
                <label htmlFor="answer">Answer</label>
                <input 
                    type="text"
                    name="answer"
                    id="answer"
                    placeholder="Enter the correct answer"
                    value={answer}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;