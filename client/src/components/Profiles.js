import React from "react";
import '../App.css';
import { modusOperandi, needScale, topicalScales, egogram, origenceIntellectance } from '../services/Scales';
import { grid } from '../services/Chart';
import { story } from '../services/TATresponse';
import { tatKeys, modusOperandiKeys } from '../services/Key';
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
    past: this.props.past,
    grid: grid,
    story: story,
    tatKeys: tatKeys,
    modusKeys: modusOperandiKeys
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

  setBarHeight = (scale) => {
    switch(scale) {
      case modusOperandi:
        return { 
          heading: 'Modus Operandi Scales',
          caption: 'Assessment of individual approaches to self description',
          text: { height: '25%' },
          bar: { height: '25%' },
          graph: { height: '100px'},
          key: this.state.modusKeys
        };
      case needScale:
        return { 
          heading: 'Need Scale',
          caption: 'Assessment of psychological wants or needs',
          text: { height: '6.66%' },
          bar: { height: '6.66%' },
          graph: { height: '400px'},
          key: this.state.modusKeys
        };
      case origenceIntellectance:
        return { 
          heading: 'Origence-Intellectance',
          caption: 'Balance between affective versus rational tendencies',
          text: { height: '25%' },
          bar: { height: '24.3%' },
          graph: { height: '100px'},
          key: this.state.modusKeys
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
        <h2>Key</h2>
        <div className="key">
          <ul>
            {this.renderKeys(this.state.modusKeys)}
          </ul>
        </div>
      </div>
    );
  }

  renderGrid = () => {
    return this.state.grid.map((row, index) => {
      return(
        <>
          <div key={index} className="grid-item"><b>{row.category}</b></div>
          <div className="grid-item">{row.percentages[0]}%</div>
          <div className="grid-item">{row.percentages[1]}%</div>
          <div className="grid-item">{row.percentages[2]}%</div>
        </> 
      )    
    });
  }

  renderKeys = (keys) => {
    return keys.map(item => {
      return(
        <li><b>{item.emphasis}</b>{item.plain}</li>
      )
      });
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
          <div className="descriptions">
            <div className="clearfix">
              <img src={require(`../images/tat-14.jpg`)} alt="apperception" className="inset" />
              <div>
                <h3>Response</h3>
                {/* {this.state.story.replace(/\n/g, <br/>)} */}
                {this.state.story}
              </div>
              <hr></hr>
              <h3>Analysis</h3>
              <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item"><b>Your data</b></div>
                <div className="grid-item"><b>Male avg.</b></div>
                <div className="grid-item"><b>Female avg.</b></div>
                {this.renderGrid()}
              </div>
            </div>
          </div>
          <h2>Key</h2>
          <div className="key">
          <ul>
            {this.renderKeys(this.state.tatKeys)}
          </ul>
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