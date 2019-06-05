import React from "react";
import '../App.css';
import { modusOperandi, needScale, topicalScales, egogram, origenceIntellectance } from '../services/Scales';
import { grid } from '../services/Chart';
import { responses } from '../services/TATresponse';
import { tatKeys, modusOperandiKeys, needScaleKeys, origenceIntellectanceKeys, transactionalAnalysisKeys } from '../services/Key';
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
    grid: grid,
    responses: responses,
    tatKeys: tatKeys,
    modusKeys: modusOperandiKeys,
    needKeys: needScaleKeys,
    welshKeys: origenceIntellectanceKeys,
    transKeys: transactionalAnalysisKeys
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
          heading: 'Needs Scale',
          caption: 'Assessment of psychological wants or needs',
          text: { height: '6.66%' },
          bar: { height: '6.66%' },
          graph: { height: '400px'},
          key: this.state.needKeys
        };
      case origenceIntellectance:
        return { 
          heading: 'Origence-Intellectance',
          caption: 'Balance between affective versus rational tendencies',
          text: { height: '25%' },
          bar: { height: '24.3%' },
          graph: { height: '100px'},
          key: this.state.welshKeys
        };
      case grid:
        return { 
          key: this.state.tatKeys
        };
      default:
        return  {
          heading: 'Transactional Analysis Scale',
          graph: { height: '140px'},
          text: { height: '20%' },
          bar: { height: '20%' },
          key: this.state.transKeys
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

  renderGraph = (scale) => {
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
            {this.renderKeys(scale)}
          </ul>
        </div>
      </div>
    );
  }

  renderGrid = (textAnalysis) => {
    return textAnalysis.map((row, index) => {
      return(
        <React.Fragment>
          <div key={index} className="grid-item"><b>{row.entity}</b></div>
          <div className="grid-item"> {row.overall_sentiment.confidence}% {row.overall_sentiment.polarity}</div>
          <div className="grid-item">{row.type}</div>
          <div className="grid-item">{row.mentions}</div>
        </React.Fragment> 
      )    
    });
  }

  renderKeys = (scale) => {
    console.log("SCALE: ", scale);
    let keys = this.setBarHeight(scale).key;
    if(keys === []) {
      keys = this.state.tatKeys;
    }
    return keys.map(item => {
      return(
        <li><b>{item.emphasis}</b>{item.plain}</li>
      )
    });
  }

  renderTATResponses = () => {
    const responses = this.state.responses;
    // responses = [];
    // if(responses === []) {
    //   return (
    //     <h2>Take a Thematic Apperception Test then view results here</h2>
    //   )
    // }
    return responses.map((response, index) => {
      return(
        <div key={index} className="graph-wrapper">
          <h2 className="graph-header">PICTURE {response.pictureNumber}</h2>
          <div className="descriptions">
            <div className="clearfix">
              <img src={require(`../images/tat-${response.pictureNumber}.jpg`)} alt="apperception" className="inset" />
              <div>
                <h3>Response</h3>             
                {response.response}
              </div>
              <hr/>
              <h3>Analysis</h3>
              <div className="grid-container">
                <div className="grid-item"><b>Entity</b></div>
                <div className="grid-item"><b>Sentiment</b></div>
                <div className="grid-item"><b>Type</b></div>
                <div className="grid-item"><b>Mentioned</b></div>
                {this.renderGrid(response.analysis)}
              </div>
            </div>
          </div> 
        </div> 
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
          {/* <h2>View results of your Thematic Apperception Tests here</h2>  */}
          {this.renderTATResponses()}
          <h2>Key</h2>
          <div className="key">
            <ul>
              {this.renderKeys(grid)}
            </ul>
          </div>
        </div>
        <h1>Personality Profiles</h1>
        {this.renderGraph(modus)}
        {this.renderGraph(needScale)}
        {this.renderGraph(egogram)}
        {this.renderGraph(welsh)}
      </div>
    );
  }

}

export default Profiles;

/**
Character: person mentioned in the response to the TAT.
Sentiment: positive, negative, or ambivalent feelings associated with a person discussed.
Positive sentiment: good feelings such as joy or warmth.
Negative sentiment: bad feelings such as anger or fear.
Ambivalent sentiment: conflicting or oscilating feelings. 


Valence, as used in psychology, especially in discussing emotions, means the intrinsic attractiveness/"good"-ness (positive valence) or averseness/"bad"-ness (negative valence) of an event, object, or situation.[1] The term also characterizes and categorizes specific emotions. For example, emotions popularly referred to as "negative", such as anger and fear, have negative valence. Joy has positive valence. Positively valenced emotions are evoked by positively valenced events, objects, or situations. The term is also used to describe the hedonic tone of feelings, affect, certain behaviors (for example, approach and avoidance), goal attainment or nonattainment, and conformity with or violation of norms. Ambivalence can be viewed as conflict between positive and negative valence-carriers.




 */

 /* {this.state.story.replace(/\n/g, <br/>)} */