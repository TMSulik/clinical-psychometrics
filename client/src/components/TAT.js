import React from "react";
// import TextInput from '../components/TextInput';
// import { tats } from '../services/Pictures';
// import { randomize } from '../services/Shuffle';
import '../App.css';

// import { AppRegistry, TextInput } from 'react-native';
class TAT extends React.Component {

  state = { 
    formValues: {}
  };

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

  save = () => {
    this.routeChange();
    // this.props.onSubmit(this.state.personalTraits);
  }

  render() {
    return (
      <div>
        <h1>THEMATIC APPERCEPTION TEST</h1>
        <p>Tell the most dramatic story you can think of about this picture.</p>
        <img src={require(`../images/tat-6.jpg`)} alt="apperception" className="tat-image" />
        <div className="tat-directions clearfix">
        <form onSubmit={this.handleSubmit}>
          <div className="prompt">
            <h4>What led up to the event depicted?</h4>
            <textarea 
              type="text" 
              className="text-field"
              name="past"
              value={this.state.value} 
              onChange={this.handleChange} 
            />
            <h4>What is happening at the moment?</h4>
            <textarea 
              name="present"
              type="text" 
              className="text-field"
              value={this.state.value} 
              onChange={this.handleChange} 
            />
            <h4>What the people are feeling and thinking?</h4>
            <textarea 
              name="feelings"
              type="text" 
              className="text-field"
              value={this.state.value} 
              onChange={this.handleChange} 
            />
            <h4>What will be a likely outcome?</h4>
            <textarea 
              name="future"
              type="text" 
              className="text-field"
              value={this.state.value} 
              onChange={this.handleChange} 
            />
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