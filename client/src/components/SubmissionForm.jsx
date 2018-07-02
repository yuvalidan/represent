import React from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';

const URL_REGEX = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/);

var axiosInstance = axios.create({
  baseURL: '/api',
});
const EMPTY_STATE = {
  selectedFile: null,
  imageUrl: '',
  image: null
}

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, EMPTY_STATE);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  fileChangedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
      imageUrl: ''
    })
    event.target.value = null;
  }

  removeFile() {
    this.setState({ selectedFile: null });
  }

  handleSubmission() {
    let url = '/url';
    const imageUrl = this.state.imageUrl;
    let data = { url: imageUrl };
    if (this.state.selectedFile) {
      const formData = new FormData()
      formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
      data = formData;
      url = '/upload';
    }

    this.props.startLoading();
    return axiosInstance.post(url, data)
    .then(res => {
      if (res && res.data) {
        this.setState({
          selectedFile: null,
          imageUrl: '',
          image: this.state.selectedFile ? URL.createObjectURL(this.state.selectedFile) : imageUrl,
        });
        this.props.updateResults(res.data)
      } else {
        this.setState(EMPTY_STATE);
        this.props.showError(res.error);
        this.props.updateResults({});
      }
    })
    .catch(e => {
      this.setState(EMPTY_STATE);
      this.props.updateResults({});
      this.props.showError(e.response.data.error);
    })
  };

  getButtonText() {
    if (this.state.image && !this.state.selectedFile) {
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
    let showSelectedFile = null;
    if (this.state.selectedFile) {
      showSelectedFile = <p>Selected image: {this.state.selectedFile.name} <i onClick={this.removeFile} className="fas fa-times-circle"></i></p>;
    }
    return (
      <div>
        <ImagePreview image={this.state.image} />
        <input type="file" name="picture" id="picture" className="inputfile" accept="image/*" onChange={this.fileChangedHandler} />
        <label htmlFor="picture" className="button">{this.getButtonText()}</label>
        {showSelectedFile}
        <p>Or provide an image url:</p>
        <div><input disabled={this.state.selectedFile} className="url-input" type="url" name="imageUrl" value={this.state.imageUrl} onChange={(event) => this.updateInput(event)} /></div>
        <button onClick={this.handleSubmission} disabled={disable} className={`button ${disable ? 'disabled' : ''}`}>Submit</button>
      </div>
    );
  }
}

export default SubmissionForm;