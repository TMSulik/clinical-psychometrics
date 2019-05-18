import React from "react";
import { adjectives } from '../services/ACL';
import '../App.css';


class Demographic extends React.Component {

  state = { acl: [], checked: false };

  componentDidMount() {
    // randomize(adjectives);
    this.setState({ acl: adjectives });
  }



  // function IdiomaticReactList(props) {
  //   return (
  //     <div>
  //       {props.items.map((item, index) => (
  //         <Item key={index} item={item} />
  //       ))}
  //     </div>
  //   );
  // }

  render() {
    // console.log("PROPS: ", this.props);
    // console.log("STATE: ", this.state.acl); 
    // var AdjectiveChecklist = () => {
    //   let state = this.state.acl;
    //   return (
    //     <div> 
    //       {/* <p>{state.map((item, index) => (
    //         <Demographic key={index} item={item} />
    //       ))}</p> */}
    //     </div>
    //   );
    // }

    return (      
      <div>
        <h1>PERSONAL INFORMATION</h1>

      </div>
    );
  }
}



export default Demographic;