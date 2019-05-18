import React from "react";
import { adjectives } from '../services/ACL';
import { randomize } from '../services/Shuffle';
import '../App.css';


class ACL extends React.Component {

  state = { acl: [], personalTraits: [] };

  componentDidMount = () => {
    console.log("ACL props: ", this.props);
    randomize(adjectives);
    this.setState({ acl: adjectives });
  }

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = () => {
    const path="/profiles";
    this.props.history.push(path);
  }

  onSelect = (event) => {
    // event.preventDefault(); // You want to maintain all events (checked boxes)
    // until you click the SUBMIT button 

    const checkedTrait = event.target.name;
    let traits = this.state.personalTraits;

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

  save = () => {
    this.routeChange();
    this.props.onSubmit(this.state.personalTraits);
  }

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
      <div className="container">
        <ul className="checklist column">
          {this.renderChecklist()}
          <button className="btn btn-default" onClick={this.save}>Submit</button>
        </ul>
        <br/>
      </div>
    </div>
  )};
};

export default ACL;
