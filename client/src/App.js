import React, { Component } from 'react';
import SubmissionForm from './components/SubmissionForm';
import DisplayResults from './components/DisplayResults';
import Explainer from './components/Explainer';
import ErrorBar from './components/ErrorBar';
import Loader from './components/Loader';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      errorMsg: '',
      loading: false
    };
    this.updateResults = this.updateResults.bind(this);
    this.showError = this.showError.bind(this);
    this.startLoading = this.startLoading.bind(this);
  }

  updateResults(results) {
    this.setState({ results, loading: false });
  }

  startLoading() {
    this.setState({ loading: true });
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
        <Loader loading={this.state.loading} />
        <header className="App-header">
          <h1 className="App-title">Represent</h1>
        </header>
        <div className={this.state.loading ? 'hidden' : ''}>
          <Explainer show={!this.state.results.numberOfPeople} />
          <DisplayResults results={this.state.results} />
          <SubmissionForm startLoading={this.startLoading} showError={this.showError} updateResults={this.updateResults} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
