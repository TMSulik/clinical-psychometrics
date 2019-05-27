import React from "react";
import '../App.css';


class Demographic extends React.Component {

  render() {
    return (      
      <div>
        <h1>PERSONAL INFORMATION</h1>
        <div className="wallpaper">
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