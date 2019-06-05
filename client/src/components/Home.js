import React from "react";
import '../App.css';

class Home extends React.Component {

  goToACL = () => {
    const path="/acl";
    this.props.history.push(path);
  };

  goToTAT = () => {
    const path="/tat";
    this.props.history.push(path);
  };

  goToBackground = () => {
    const path="/demographic";
    this.props.history.push(path);
  };
 
  render() {
    return (      
      <div>
        <h1>Available Inventories</h1>
        <div className="homepage">
          <button className="btn btn-default acl-btn" onClick={this.goToACL}>Adjective Checklist</button>
          <button className="btn btn-default acl-btn" onClick={this.goToTAT}>Thematic Apperception Test</button>
          <button className="btn btn-default acl-btn" onClick={this.goToBackground}>Personal Background</button>
        </div>
      </div>
    );
  }
}

export default Home;