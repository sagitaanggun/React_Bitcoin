import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import navbar from './component/navbar';
import bitcoin from './component/bitcoin';
import bitrupiah from './component/bitrupiah';
import rupiahbit from './component/rupiahbit';

class App extends Component {
  render() {
    return (
      <div>
        <navbar/>

        <router>
        <Route exact path="/" component={bitcoin}/>
        <Route path="/bitrupiah" component={bitrupiah}/>
        <Route path="/rupiahbit" component={rupiahbit}/>
        </router>
      </div>
    );
  }
}

export default App;