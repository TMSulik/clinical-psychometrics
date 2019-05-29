import React from "react";
import '../App.css';
import { modusOperandi, needScale, topicalScales, egogram, origenceIntellectance } from '../services/Scales';
// import { tallyScaleItem } from '../services/ProcessScale';
class Profiles extends React.Component {

  state = { 
    modusOperandi: [],
    needScale: [],
    topicalScales: [], 
    egogram: [], 
    origenceIntellectance: [],
    personalTraits: this.props.traits,
    percent: 1.0,
    past: this.props.past
    // numerator: 0
  };

  componentDidMount() {
    this.setState({
      modusOperandi: modusOperandi, 
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
    const barHeight = this.setBarHeight(scale).bar;
    const Bar = ({percent}) => {
      return (
        <div style={barHeight}>
          <div className="bar" style={{width: `${percent}%`}} />
        </div>
      )
    } 
    return scale.map(trait => {
      const denominator = trait.indicative.length + trait.contraindicative.length;
      // this.setState({ numerator: tallyScaleItem(trait, this.state.personalTraits) });
      // let percent = (this.state.numerator / denominator ) * 100;
      let percent = (this.tallyScaleItem(trait) / denominator ) * 100;
      return (
        <Bar
          percent={percent}
          key={trait.trait}
        />
      )
    });
  }

  /*
  Modus Operandi Scales 
The Modus Operandi Scales assess ways in which the individual approached the task of describing themselves
  */

  setBarHeight = (scale) => {
    switch(scale) {
      case modusOperandi:
        return { 
          heading: 'Modus Operandi Scales',
          caption: 'Assesment of individual approaches to self description',
          text: { height: '25%' },
          bar: { height: '25%' },
          graph: { height: '100px'}
        };
      case needScale:
        return { 
          heading: 'Need Scale',
          caption: 'Assessment of psychological wants or needs',
          text: { height: '6.66%' },
          bar: { height: '6.66%' },
          graph: { height: '400px'}
        };
      case origenceIntellectance:
        return { 
          heading: 'Origence-Intellectance',
          caption: 'Balance between affective versus rational tendencies',
          text: { height: '25%' },
          bar: { height: '24.3%' },
          graph: { height: '100px'}
        };
      default:
        return  {
          text: { height: '25%' },
          bar: { height: '25%' } 
        };
    }

  }

  renderBarText(scale) {
    const barHeight = this.setBarHeight(scale).text;
    return (
      <div className="bar-text-content">
        {
          scale.map((trait) => (
            <div className="text" style={barHeight} key={trait.trait}>
              {trait.trait}
            </div>
          ))
        }
      </div>
    )
  }

  renderGraph(scale) {
    const graphHeight = this.setBarHeight(scale).graph;
    const heading = this.setBarHeight(scale).heading;
    const caption = this.setBarHeight(scale).caption;
    return (
      <div className="graph-wrapper"> 
        <h2 className="graph-header">{heading}</h2>
        <p>{caption}</p>     
        <div className="graph" style={graphHeight}>
          {this.renderBarText(scale)}
          <div className="bar-lines-container"> 
            {this.renderLines()}
            {this.renderBars(scale)}
          </div> 
        </div>
      </div>
    );
  }

  render() {
    const modus = this.state.modusOperandi;
    const needScale = this.state.needScale;
    const welsh = this.state.origenceIntellectance;
    return (
      <div>
        <h1>TAT Responses</h1>
        <div className="graph-wrapper">
        <h2 className="graph-header">Picture 31</h2>
          <div className="graph descriptions text-box">

            <div className="clearfix">
              
              <img src={require(`../images/tat-29.jpg`)} alt="apperception" className="inset" />
              <div>
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
        <h1>Personality Profiles</h1>
        {this.renderGraph(modus)}
        {this.renderGraph(needScale)}
        {this.renderGraph(welsh)}
      </div>
    );
  }

}

export default Profiles;