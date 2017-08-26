import React from 'react';
import axios from 'axios';

import AdminCreateArtworks from './admin-create-artworks';
import AdminArtworksList from './admin-artworks-list';

class AdminArtworks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artworks: []
    }

    this.api = 'http://localhost:27017/api/artworks';
  }

  componentWillMount() {
    axios.get(this.api)
      .then(response => this.setState({artworks: response.data}))
  }
  render() {
    return (
      <div>
        admin-artworks
        <AdminCreateArtworks
          family={this.props.families}
          selectedFamilyTitle={this.props.selectedFamilyTitle}
          selectedFamilyId={this.props.selectedFamilyId}/>
        <AdminArtworksList artworks={this.state.artworks} selectedFamilyId={this.props.selectedFamilyId}/>
      </div>

    )
  }
}

export default AdminArtworks;
