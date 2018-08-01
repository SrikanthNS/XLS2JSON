import React, { Component } from 'react';
import './App.css';
import Upload from './upload/upload';
import HtmlTable from "./upload/htmltable";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Upload />
        <HtmlTable />
      </div>
    );
  }
}

export default App;

