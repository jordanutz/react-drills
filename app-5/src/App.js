import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AMANDA PLEASE</h1>
        <Image bland={"https://img.buzzfeed.com/buzzfeed-static/static/2015-03/2/11/enhanced/webdr15/anigif_enhanced-28828-1425315158-9.gif"}/>
      </div>
    );
  }
}

export default App;
