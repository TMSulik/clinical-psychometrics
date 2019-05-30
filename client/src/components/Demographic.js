import React from "react";
import '../App.css';
import { surveyQuestions } from '../services/Survey';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
class Demographic extends React.Component {

  state = {
    surveyQuestions: surveyQuestions
  }
  renderQuestions = () => {
    return this.state.surveyQuestions.map((question, index) => {
      return(
        <div key={index}> 
          <li className="question">{question.question}</li>
          <Dropdown className="dropdown" options={question.options} onChange={this._onSelect} value="select" placeholder="Select an option" /> 
        </div> 
      )    
    });
  }
  render() {
    return (      
      <div>
        {/* {this.renderQuestions()} */}
        <h1>PERSONAL INFORMATION</h1>
        <div className="questionaire">
          <ul>
            {this.renderQuestions()}
          </ul>
          <button className="btn btn-default personal-submit" onClick={this.save}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Demographic;




/*
class Demographic extends React.Component {
  state = {value: ''};
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea 
            type="text" 
            className="text-field"
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Demographic;
*/