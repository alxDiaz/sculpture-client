import React from 'react';
import axios from 'axios';

class AdminCreateFamilies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }

    this.api = 'http://localhost:27017/api/families';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit(event) {
  axios.post(this.api, {
    title: this.state.title,
    description: this.state.description
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

  render() {
    return (
      <div className="admin-create-families">
        This is families list
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}


export default AdminCreateFamilies;
