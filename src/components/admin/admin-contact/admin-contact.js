import React from 'react';
import axios from 'axios';

class AdminContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      web: '',
      address: '',
      phone: '',
      username: '',
      password: '',
      id: ''
    }
    this.api = 'http://localhost:27017/api/users'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    axios.get(this.api)
      // .then(res => console.log(res.data))
      .then(res => this.setState({
        name: res.data[0].name,
        email: res.data[0].email,
        web: res.data[0].web,
        address: res.data[0].address,
        phone: res.data[0].phone,
        username: res.data[0].username,
        password: res.data[0].password,
        _id: res.data[0]._id
      }))
      .catch(error => console.log(error))
      // .catch(() => console.log('It failed'))
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.put(`${this.api}/${this.state._id}`, {
    name: this.state.name,
    email: this.state.email,
    web: this.state.web,
    address: this.state.address,
    phone: this.state.phone,
    username: this.state.username,
    password: this.state.password
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="admin-contact">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="contact-input" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" className="contact-input" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
          <input type="text" className="contact-input" placeholder="web" name="web" value={this.state.web} onChange={this.handleChange} />
          <input type="text" className="contact-input" placeholder="address" name="address" value={this.state.address} onChange={this.handleChange} />
          <input type="text" className="contact-input" placeholder="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
          <input type="text" className="contact-input" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" className="contact-input" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit" className="contact-submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default AdminContact;
