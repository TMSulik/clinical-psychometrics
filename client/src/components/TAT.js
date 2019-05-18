import React from "react";
import { tats } from '../services/Pictures';
import { randomize } from '../services/Shuffle';
import '../App.css';

class TAT extends React.Component {

  state = { tat: [] };

  componentDidMount() {
    randomize(tats);
    this.setState({ tat: tats });
  }

  render() {
    return (
      <div>
        {/* <img src={require(`../../images/${inkblot}`)} alt={(`blot#${this.getIndex(inkblot)}`)} />
        <img src={mind} className="mind-map" alt="the mind" /> */}
        <h1>THEMATIC APPERCEPTION TEST</h1>
        <img src={require(`../images/tat-5.jpg`)} alt="apperception" className="tat-image" />
        <div className="tat-directions clearfix">
          <ul className="prompt">
          <h2>Instructions</h2>
          <p>Tell the most dramatic story you can think of about this picture.</p>
            <li>What has led up to the event depicted?</li>
            <li>What is happening at the moment?</li>
            <li>What the people are feeling and thinking?</li>
            <li>What will be a likely outcome?</li>
          </ul>
        </div>
        <form className="tat-response">
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default TAT;