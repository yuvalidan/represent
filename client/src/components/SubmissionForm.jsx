import React from 'react';
import axios from 'axios';
import ImagePreview from './ImagePreview';


class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      image: null
    };
    this.handleSubmission = this.handleSubmission.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

    handleSubmission = () => {
      const formData = new FormData()
      formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
      axios.post('http://localhost:5000/upload', formData)
      .then(res => {
        if (res && res.data) {
          this.setState({image: URL.createObjectURL(this.state.selectedFile)});
          this.props.updateResults(res.data)
        }
      })
    };
    
    render() {
      return (
        <div>
            <input type="file" onChange={this.fileChangedHandler} name="picture" accept="image/*" />
            <input type="submit" onClick={this.handleSubmission} />
            <ImagePreview image={this.state.image} />
        </div>
      );
    }
  }

export default SubmissionForm;