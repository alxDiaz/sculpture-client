import React from 'react';
import axios from 'axios';

import AdminFamiliesListItem from './admin-families-list-item';

class AdminFamiliesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      families: []
    }
    this.api = 'http://localhost:27017/api/families';
  }

  componentWillMount() {
    axios.get(this.api)
      // .then(res => console.log(res.data))
      .then(res => this.setState({families: res.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="admin-families-list">
        <ul>
          {this.state.families.map(item => <li key={item._id}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default AdminFamiliesList;
