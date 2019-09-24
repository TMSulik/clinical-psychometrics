import React from "react";
import axios from 'axios';
import { adjectives } from '../services/ACL';
import { randomize } from '../services/Shuffle';
import '../App.css';
class ACL extends React.Component {

  state = { 
    acl: [], 
    personalTraits: [] 
  };

  componentDidMount = () => {
    console.log("ACL props: ", this.props);
    randomize(adjectives);
    this.setState({ acl: adjectives });
  };

  // constuctor = () => {
  //   this.routeChange = this.routeChange.bind(this);
  // };

  routeChange = () => {
    const path="/profiles";
    this.props.history.push(path);
  };

  onSelect = (event) => {
    // Don't use event.preventDefault() here.
    // The app must maintain all events (checked boxes)
    // until the user clicks the SUBMIT button. 

    const checkedTrait = event.target.name;
    const traits = this.state.personalTraits;

    if(event.target.checked && !traits.includes(checkedTrait)) {
      traits.push(checkedTrait);
    } else {
      for(let i = 0; i < traits.length; i++){ 
        if (traits[i] === checkedTrait) {
          traits.splice(i, 1); 
        }
      }
    }
    this.setState({ personalTraits: traits });

    console.log("Personal traits: ", this.state.personalTraits)
  
  };

  save = async () => {
    const traits = await axios.post(`/api/traits`, this.state.personalTraits);
    this.props.onSubmit(traits.data);
    this.routeChange();
  };

  renderChecklist = () => {    
    return (
      this.state.acl.map((adj, index) => {
        return (
          <li key={index} item={adj}>
            <label>
              <input
                name={adj}
                type="checkbox"
                defaultChecked={false}
                onChange={this.onSelect} />
              {adj}
            </label>
          </li>  
        )    
      })
    );
  }

  render() {
    return (
    <div className="clearfix">
      <h1>Adjective Checklist</h1>
      <ul>
        <li>Check any words that describe yourself</li>
        <li>Click SUBMIT when you are done</li>
      </ul>
      <div className="container">
        <ul className="checklist column">
          {this.renderChecklist()}
        </ul>
        <button className="btn btn-default" onClick={this.save}>Submit</button>
        <br/>
      </div>
    </div>
  )};
};

export default ACL;
