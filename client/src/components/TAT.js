import React from "react";
import TextInput from '../components/TextInput';
// import { tats } from '../services/Pictures';
// import { randomize } from '../services/Shuffle';
import '../App.css';
class TAT extends React.Component {

  state = { 
    // past: "",
    themes: { 
      past: String, 
      present: String, 
      future: String, 
      feelings: String 
    }
  };

  render() {
    return (
      <div>
        <h1>THEMATIC APPERCEPTION TEST</h1>
        <p> Tell the most dramatic story you can think of about this picture.</p>
        <img src={require(`../images/tat-31.jpg`)} alt="apperception" className="tat-image" />
        <div className="tat-directions clearfix">
          <div className="prompt">
            <h4>What led up to the event depicted?</h4>
            <textarea name="body"
              className="text-field"
              onChangeText={(past) => this.setState({past})}
              value={this.state.past}
            />
            
            {/* <TextInput
              {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
              editable = {true}
              maxLength = {40}
            /> */}
            <h4>What is happening at the moment?</h4>
            <textarea name="body"
              className="text-field"
              onChange={(present) => this.setState({present})}
              value={this.state.present}
            />
            <h4>What the people are feeling and thinking?</h4>
            <textarea name="body"
              className="text-field"
              onChange={(feeling) => this.setState({feeling})}
              value={this.state.feeling}
            />
            <h4>What will be a likely outcome?</h4>
            <textarea name="body"
              className="text-field"
              onChange={(future) => this.setState({future})}
              value={this.state.future}
            />
            <button className="btn btn-default tat-submit" onClick={this.save}>Submit</button>
          </div>
        </div>
      </div>
    );
  }

}

export default TAT;