import React from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';

const URL_REGEX = new RegExp('https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9].[^s]{2,}');

var axiosInstance = axios.create({
  baseURL: '/api',
});

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      imageUrl: '',
      image: null
    };
    this.handleSubmission = this.handleSubmission.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
  }

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

    handleSubmission() {
      let url = '/url';
      let data = { url: this.state.imageUrl };
      if (this.state.selectedFile) {
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        data = formData;
        url = '/upload';
      }
        return axiosInstance.post(url, data)
        .then(res => {
          if (res && res.data) {
            this.setState({
              selectedFile: null,
              image: this.state.selectedFile ? URL.createObjectURL(this.state.selectedFile) : this.state.imageUrl,
            });
            this.props.updateResults(res.data)
          } else {
            this.props.showError(res.error);
          }
        })
        .catch(e => {
          this.setState({ selectedFile: null, imageUrl: '', image: '' });
          this.props.showError(e.response.data.error);
        })
    };

    getButtonText() {
      if (this.state.image) {
        return 'Choose another image';
      }
      if (!this.state.selectedFile) {
        return 'Choose an image';
      }
      return (<span><i className="far fa-check-circle"></i>  Selected</span>);
    }

    updateInput(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
    }

    disableSubmit() {
      if (this.state.selectedFile) {
        return false;
      }
      if (!this.state.imageUrl) {
        return true;
      }
      return !URL_REGEX.test(this.state.imageUrl);
    }
    
    render() {
      const disable = this.disableSubmit();
      return (
        <div>
          <ImagePreview image={this.state.image} />
          <input type="file" name="picture" id="picture" className="inputfile" accept="image/*" onChange={this.fileChangedHandler} />
          <label htmlFor="picture" className="button">{this.getButtonText()}</label>
          <p>Or provide an image url:</p>
          <div><input className="url-input" type="url" name="imageUrl" value={this.state.imageUrl} onChange={(event) => this.updateInput(event)} /></div>
          <button onClick={this.handleSubmission} disabled={disable} className={`button ${disable ? 'disabled': ''}`}>Submit</button>
        </div>
      );
    }
  }

export default SubmissionForm;