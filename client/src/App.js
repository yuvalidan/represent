import React, { Component } from 'react';
import SubmissionForm from './components/SubmissionForm';
import DisplayResults from './components/DisplayResults';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {} };
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Represent</h1>
        </header>
        <div>
          <h5>Upload your panel photo/flyer</h5>
          <DisplayResults results={this.state.results} />
          <SubmissionForm updateResults={this.updateResults} />
        </div>
      </div>
    );
  }
}

export default App;
