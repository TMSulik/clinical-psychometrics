import React from "react";
import '../App.css';

class Home extends React.Component {

  render() {
    return (      
      <div>
        <h1>Available Inventories</h1>
        <div className="homepage">
          <button className="btn btn-default acl-btn" onClick={this.save}>Adjective Checklist</button>
          <button className="btn btn-default acl-btn" onClick={this.save}>Thematic Apperception Test</button>
          <button className="btn btn-default acl-btn" onClick={this.save}>Personal Background</button>
        </div>
      </div>
    );
  }
}

export default Home;