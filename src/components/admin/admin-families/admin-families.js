import React from 'react';
import axios from 'axios';

import AdminCreateFamilies from './admin-create-families';
import AdminFamiliesList from './admin-families-list';

class AdminFamilies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      families: [],
      selectedFamilyTitle: null,
      selectedFamilyId: null //saturday 26
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
      <div className="admin-families">
        <AdminCreateFamilies />
        <AdminFamiliesList
          families={this.state.families}
          selectedFamilyTitle={this.state.selectedFamilyTitle}
          selectedFamilyId={this.state.selectedFamilyId}
          onFamilySelect={(selectedFamilyTitle, selectedFamilyId) => this.setState({selectedFamilyTitle, selectedFamilyId}) }/>
        {console.log(this.state.selectedFamilyTitle)}
      </div>
    )
  }

}

export default AdminFamilies;
