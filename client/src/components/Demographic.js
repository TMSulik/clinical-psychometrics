import React from "react";
import '../App.css';
import { surveyQuestions } from '../services/Survey';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = {
  gender: [ 
    'Male', 
    'Female', 
    'Other'],
  boolean: [
    'Yes', 
    'No'],
  education: [
    'Less than high school',
    'High school',
    'University degree',
    'Graduate degree'],
  area: [
    'Rural (countryside)',
    'Suburban',
    'Urban (Town, City)'],
  major: [
    'Science',
    'Engineering',
    'Business',
    'Law',
    'Medical',
    'Social Science',
    'Liberal Arts',
    'Other'],
  handedness: [
    'Right',
    'Left',
    'Both'],
  marital: [
    'Never married',
    'Currently married',
    'Previously married'],
  siblings: [
    'One',
    'Two',
    'Three',
    'Four',
    'Five or more'],
  birth: [
    'Firstborn',
    'Middle child',
    'Youngest'],
  // years: years()
}

class Demographic extends React.Component {

  state = {
    surveyQuestions: surveyQuestions
  }
  renderQuestions = () => {
    console.log(this.state.surveyQuestions[0].question)
    this.state.surveyQuestions.map((question, index) => {
      return( 
        <div key="index"> 
          <li className="question">{question.question}</li>
          <Dropdown options={question.options} onChange={this._onSelect} value="select" placeholder="Select an option" /> 
        </div> 
      )    
    });
  }

  render() {
    console.log("STATE: ", this.state.surveyQuestions)
    // this.setState({ surveyQuestions: surveyQuestions })
    return (      
      <div>
        {/* {this.renderQuestions()} */}
        <h1>PERSONAL INFORMATION</h1>
        <div className="questionaire">
          <ul>
          {this.renderQuestions()}
            <li className="question">{this.state.surveyQuestions[0].question}</li>
            <Dropdown className="dropdown" options={this.state.surveyQuestions[0].options} onChange={this._onSelect} value="select" placeholder="Select an option" /> 
            
            {/* <li className="question">What year were you born?</li>
            <Dropdown className="dropdown" options={options.years} onChange={this._onSelect} value="select" placeholder="Select an option" /> */}
            
            {/* <li className="question">What is your marital status?</li>
            <Dropdown className="dropdown" options={options.marital} onChange={this._onSelect} value="select"  placeholder="Select an option" />
            <li className="question">Have you ever parented a child?</li>
            <Dropdown className="dropdown" options={options.boolean} onChange={this._onSelect} value="select"  placeholder="Select an option" />
            <li className="question">Including you, how many children did your mother have?</li>
            <Dropdown className="dropdown" options={options.siblings} onChange={this._onSelect} value="select"  placeholder="Select an option" />
            <li className="question">Where were you in birth order?</li>
            <Dropdown className="dropdown" options={options.birth} onChange={this._onSelect} value="select"  placeholder="Select an option" />
            <li className="question">Is English your native language?</li>
            <Dropdown className="dropdown" options={options.boolean} onChange={this._onSelect} value="select" placeholder="Select an option" />
            <li className="question">Have you given accurate answers and may they be used for research?</li>
            <Dropdown className="dropdown" options={options.boolean} onChange={this._onSelect} value="select"  placeholder="Select an option" />
            
            <li className="question">If you attended a university, what type of major did you pursue?</li>
            <Dropdown className="dropdown" options={options.major} onChange={this._onSelect} value="select"  placeholder="Select an option" />  */}
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