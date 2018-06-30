import React, { Component } from 'react';
import SubmissionForm from './SubmissionForm.jsx';
import DisplayResults from './DisplayResults.jsx';
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
          <h3>How's your event looking?</h3>
        </header>
        <div>
          <h5>Upload your panel photo/flyer</h5>
          <SubmissionForm updateResults={this.updateResults} />
          <DisplayResults results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
