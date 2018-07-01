import React, { Component } from 'react';
import SubmissionForm from './components/SubmissionForm';
import DisplayResults from './components/DisplayResults';
import Explainer from './components/Explainer';
import ErrorBar from './components/ErrorBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: {}, errorMsg: '' };
    this.updateResults = this.updateResults.bind(this);
    this.showError = this.showError.bind(this);
  }

  updateResults(results) {
    this.setState({ results });
  }

  showError(errorMsg) {
    if (!errorMsg) {
      errorMsg = 'Unkown error';
    }
    this.setState({ errorMsg })
    window.setTimeout(() => {
      this.setState({
        errorMsg: ''
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <ErrorBar errorMsg={this.state.errorMsg} />
        <header className="App-header">
          <h1 className="App-title">Represent</h1>
        </header>
        <div>
          <Explainer show={!this.state.results.numberOfPeople} />
          <DisplayResults results={this.state.results} />
          <SubmissionForm showError={this.showError} updateResults={this.updateResults} />
        </div>
      </div>
    );
  }
}

export default App;
