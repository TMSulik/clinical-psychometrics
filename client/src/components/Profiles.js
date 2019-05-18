import React from "react";
import '../App.css';
import { needScale } from '../services/Scales';

class Profiles extends React.Component {

  state = { 
    needScale: [],
    personalTraits: this.props.traits
  };

  componentDidMount() {
    this.setState({ needScale: needScale });
    console.log("TRAITS in Profiles: ", this.state.personalTraits);
  }

  renderLines() {
    const Line = ({left}) => {
      return (
        <div 
          className="line"
          style={{left: `${left}%`}}
        />
      )
    }
    return Array(10).fill(null).map((el, i) => (
      <Line 
        left={i * 10}
        key={i}
      />
    ))
  }

  renderBars() {
    const Bar = ({percent}) => {
      return (
        <div className="bar" style={{width: `${percent}%`}}/>
      )
    }
    // const { needScale } = this.props
    const needScale = this.state.needScale; 

    return needScale.map(trait => {
      const percent = (trait.total / trait.max) * 100;
      return (
        <Bar
          percent={percent}
          key={trait.trait}
        />
      )
    });
  }

  renderBarText() {
    const needScale = this.state.needScale;
    return (
      <div className="bar-text-content">
        {
          needScale.map((trait) => (
            <div className="text" key={trait.trait}>
              {trait.trait}
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Personality Profiles</h1>
        <div className="graph-wrapper"> 
        <h2 className="graph-header">Need Scale</h2>         
          <div className="graph">
            {this.renderBarText()}
            <div className="bar-lines-container"> 
              {this.renderLines()}
              {this.renderBars()}
            </div> 
          </div>
        </div>
      </div>
    );
  }

}

export default Profiles;