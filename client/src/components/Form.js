import React from "react";
import Profiles from '../components/Profiles';

class Form extends React.Component {

  state: { personalTraits: [] }

  // ??? Unclear
  handleForm = (props) => {
      this.setState({personalTraits: props.personalTraits});
  }

  render() {
    return (
      <div>
        <Profiles traits={this.handleForm}/> 
      </div>
    )
  };
};

export default Form;