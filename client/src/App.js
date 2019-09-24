import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ACL from './components/ACL';
import TAT from './components/TAT';
import Profiles from './components/Profiles';
import Demographic from './components/Demographic';
// import Login from './components/Login';
import Footer from './components/Footer';
import { adjectives } from './services/ACL';

class App extends React.Component {

  state = { acl: [], personalTraits: []  };

  componentDidMount() {
    this.setState({ acl: adjectives });
  }

  AdjectiveChecklist() {
    let state = this.state.acl;
    return (
      <div> 
        <p>{state.map((item, index) => (
          <Demographic key={index} item={item} />
        ))}</p>
      </div>
    );
  }

  onSubmit = (traits) => {
    console.log('App traits:', traits);
    this.setState({personalTraits: traits});
  }

  render() {
    this.AdjectiveChecklist();
    return (
      <div className="App">
      <Header/>
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/home" component={Home}/>
        <Route 
          exact path="/acl" 
          render={(props) => <ACL {...props} 
          traits={this.state.personalTraits} 
          onSubmit={this.onSubmit} />}
        />
        <Route exact path="/tat" component={TAT}/>
        <Route 
          exact path="/demographic" 
          component={Demographic}
        />
        <Route 
          exact path="/profiles" 
          render={(props) => <Profiles {...props} traits={this.state.personalTraits} />}
        />
      </BrowserRouter>
      <Footer/>
      </div>
    );
  }
}

export default App;
