import React from 'react';
import axios from 'axios';

import AdminCreateMedia from './admin-create-media';
import AdminMediaList from './admin-media-list';

class AdminMedia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medias: []
    }

    this.api = 'http://localhost:27017/api/medias';
  }

  componentWillMount() {
    axios.get(this.api)
      // .then(res => console.log(res.data))
      .then(res => this.setState({medias: res.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="admin-families">
        <AdminCreateMedia />
        <AdminMediaList medias={this.state.medias}/>
      </div>
    )
  }

}

export default AdminMedia;
