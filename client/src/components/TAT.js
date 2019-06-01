import React from "react";
import axios from 'axios';
import { prompts } from '../services/TATprompts';
// import TextInput from '../components/TextInput';
import { tats } from '../services/Pictures';
import { randomize } from '../services/Shuffle';
import '../App.css';

// import { AppRegistry, TextInput } from 'react-native';
class TAT extends React.Component {

  state = { 
    formValues: {},
    prompts: prompts,
    pictures: tats,
    picture: tats[0]
  };

  componentDidMount = () => {
    const pic = randomize(this.state.pictures)[0];
    this.setState({ picture: pic });
    console.log("PIC: ", this.state.picture);
  }

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    //this.setState({value: event.target.value});
    let formValues = this.state.formValues;
    let name = event.target.name; // Field name
    let value = event.target.value; // Field value

    formValues[name] = value;

    this.setState({formValues})
  }

  handleSubmit(event) {
    console.log('A form was submitted: ' + JSON.stringify(this.state.formValues));
    event.preventDefault();
  }

  routeChange = () => {
    const path="/profiles";
    this.props.history.push(path);
  }

  selectPicture = () => {
    const picture = this.state.picture;
    return(
      <img src={require(`../images/${picture}`)} alt={picture} className="tat-image" />
    );
  }

  save = () => {
    this.routeChange();
    // this.props.onSubmit(this.state.personalTraits);
  }

  renderPrompts = () => {
    return this.state.prompts.map((prompt, index) => {
      return(
        <div key={index}> 
          <h4>{prompt.question}</h4>
          <textarea 
            type="text" 
            className="text-field"
            name={prompt.name}
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </div> 
      )    
    });
  }

  renderPrompt = () => {
    return (
      <div> 
          <h2>Instructions</h2>
          <h4>For the next 10 minutes, write a story about this picture.</h4>
          <h4>
            <ul className="tat-instructions">
              <li>Who are the people?</li> 
              <li>What is happening?</li> 
              <li>What led up to the event depicted?</li> 
              <li>What are they thinking about and feeling?</li> 
              <li>What do they want?</li> 
              <li>What will happen next?</li>
            </ul>
          </h4>
          <textarea 
            type="text" 
            className="text-field"
            name={prompt.name}
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </div> 
    );
  }



// Please write continuously for the full 10 minutes.
// Press the "Finish" button when you're done.

  render() {
    return (
      <div>
        <h1>THEMATIC APPERCEPTION TEST</h1>
        <p>Tell the most dramatic story you can think of about this picture.</p>
        {this.selectPicture()}
        <div className="tat-directions clearfix">
        <form onSubmit={this.handleSubmit}>
          <div className="prompt">
            {this.renderPrompt()}
            <button className="btn btn-default tat-submit" onClick={this.save}>Submit</button>
          </div>
          </form>
        </div>
        
      </div>
    );
  }

}

export default TAT;

/* 
Didn't work:
  <textarea name="body"
    className="text-field"
    onChangeText={(past) => this.setState({past})}
    value={this.state.past}
  />

  <TextInput
    {...this.props} 
    editable = {true}
    maxLength = {40}
  />

*/