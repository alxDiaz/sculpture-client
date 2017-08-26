import React from 'react';
import axios from 'axios';

class AdminCreateExpos extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      place: '',
      hyperlink: '',
      modality: '',
      city: '',
      country: '',
      startDate: '',
      endDate: '',
      other: '',
    }

    this.api = 'http://localhost:27017/api/expos'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    return this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const files = this.filesInput.files;
    console.log(files[0]);

    const formData = new FormData();

    formData.append('image', files[0]);
    formData.append('title', this.state.title);
    formData.append('place', this.state.hyperlink);
    formData.append('modality', this.state.modality);
    formData.append('city', this.state.city);
    formData.append('country', this.state.country);
    formData.append('startDate', this.state.startDate);
    formData.append('endDate', this.state.endDate);
    formData.append('other', this.state.other);

    const config = {
      headers: { 'content-type': 'multypart/form-data' }
    }

    return (
        axios.post(this.api, formData, config)
          .then(response => console.log(response))
          .catch(error => console.log(error))
    )
  }

  render() {
    return (
      <div className="admin-create-expos">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" placeholder="Place" name="place" value={this.state.place} onChange={this.handleChange}/>
          <input type="text" placeholder="URL" name="hyperlink" value={this.state.hyperlink} onChange={this.handleChange}/>
          <input type="text" placeholder="Modality" name="modality" value={this.state.modality} onChange={this.handleChange}/>
          <input type="text" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange}/>
          <input type="text" placeholder="Country" name="country" value={this.state.country} onChange={this.handleChange}/>
          <input type="text" placeholder="Start Date" name="startDate" value={this.state.startDate} onChange={this.handleChange}/>
          <input type="text" placeholder="End Date" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
          <input type="other" placeholder="Other" name="other" value={this.state.other} onChange={this.handleChange}/>
          <input type="file" name="image" ref={input => {this.filesInput = input}}/>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

export default AdminCreateExpos;
