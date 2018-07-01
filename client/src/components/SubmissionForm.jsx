import React from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';

var axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      image: null
    };
    this.handleSubmission = this.handleSubmission.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

    handleSubmission = () => {
      const formData = new FormData()
      formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
      axiosInstance.post('/upload', formData)
      .then(res => {
        if (res && res.data) {
          this.setState({selectedFile: null, image: URL.createObjectURL(this.state.selectedFile)});
          this.props.updateResults(res.data)
        }
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
    
    render() {
      const disable = !this.state.selectedFile;
      return (
        <div>
          <ImagePreview image={this.state.image} />
          <input type="file" name="picture" id="picture" className="inputfile" accept="image/*" onChange={this.fileChangedHandler} />
          <label htmlFor="picture" className="button">{this.getButtonText()}</label>
          <button onClick={this.handleSubmission} disabled={disable} className={`button ${disable ? 'disabled': ''}`}>Submit</button>
        </div>
      );
    }
  }

export default SubmissionForm;