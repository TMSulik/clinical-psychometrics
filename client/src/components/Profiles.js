import React from "react";
import '../App.css';
import { needScale, topicalScales, egogram, origenceIntellectance } from '../services/Scales';
// import { tallyScaleItem } from '../services/ProcessScale';

class Profiles extends React.Component {

  state = { 
    needScale: [],
    topicalScales: [], 
    egogram: [], 
    origenceIntellectance: [],
    personalTraits: this.props.traits,
    percent: 1.0,
    past: this.props.past
  };

  componentDidMount() {
    this.setState({ 
      needScale: needScale,
      topicalScales: topicalScales,
      egogram: egogram, 
      origenceIntellectance: origenceIntellectance
    });
    console.log("TRAITS in Profiles: ", this.state.personalTraits);
  }

  tallyScaleItem = (item) => {
    // Get the personal traits the user has checked
    const traits = this.state.personalTraits;
    const indic = traits.filter(value => item.indicative.includes(value)).length;
    const contra = traits.filter(value => item.contraindicative.includes(value)).length;
    // Get the maximum absolute number of relevant traits
    const pos = item.indicative.length;
    const neg = item.contraindicative.length;
    let result = neg;
    // If no relevant traits are checked, default to 50% (equivocal)
    if(indic + contra === 0) {
      return (neg + pos) / 2;
    }
    // Otherwise, return the proportion of indicative to contraindicative
    return result - contra + indic;
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

  renderBars(scale) {
    const Bar = ({percent}) => {
      return (
        <div className="bar" style={{width: `${percent}%`}}/>
      )
    }
    // const { needScale } = this.props
    // const needScale = this.state.needScale; 
 
    return scale.map(trait => {
      const denominator = trait.indicative.length + trait.contraindicative.length;
      let percent = (this.tallyScaleItem(trait) / denominator ) * 100;
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
    const needScale = this.state.needScale;
    return (
      <div>
        <h1>Personality Profiles</h1>
        <div className="graph-wrapper"> 
          <h2 className="graph-header">Need Scale</h2>
          <p>Assessment of psychological wants or needs</p>         
          <div className="graph">
            {this.renderBarText()}
            <div className="bar-lines-container"> 
              {this.renderLines()}
              {this.renderBars(needScale)}
            </div> 
          </div>
        </div>
        <h1>TAT Responses</h1>
        <div className="graph-wrapper">
        <h2 className="graph-header">Picture 31</h2>
          <div className="graph descriptions text-box">

            <div className="clearfix">
              
              <img src={require(`../images/tat-29.jpg`)} alt="apperception" className="inset" />
              <div >
                <h3>Past</h3>
                <p>A demigod was executed in the Holy Land over two millennia ago. He vowed one day to return to usher in the End of Time.</p>
                <h3>Present</h3>
                <p>He is now reigning down from Heaven in all his glory.</p>
                <h3>Future</h3>
                <p>He will soon sit at the right hand of the Father to judge the quick and the dead.</p>
                <h3>Feelings</h3>
                <p>We are all very afraid: where will YOU spend eternity?</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Profiles;