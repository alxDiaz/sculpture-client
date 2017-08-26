import React from 'react';
import axios from 'axios';

class AdminCreateArtworks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            family: "599775b063943902f4c18806",
            material: '',
            specs: '',
        }

        this.formData = new FormData();
        this.api = 'http://localhost:27017/api/artworks';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
      event.preventDefault();
      const files = this.filesInput.files;
      console.log(files[0]);

      this.formData.append('image', files[0]);
      this.formData.append('name', this.state.name);
      this.formData.append('family', this.state.family);
      this.formData.append('material', this.state.material);
      this.formData.append('specs', this.state.specs);

      const config = {
        headers: { 'content-type': 'multypart/form-data' }
      }

      return axios.post(this.api, this.formData, config)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render(){

        if(!this.props.selectedFamilyTitle) {
          return <p>Select a Family</p>
        }

        return (
            <div className="admin-create-artworks" >
                <p>{this.props.selectedFamilyTitle}</p>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                  <input type="text" placeholder="Material" name="material" value={this.state.material} onChange={this.handleChange} />
                  <input type="text" placeholder="Specs" name="specs" value={this.state.specs} onChange={this.handleChange} />
                  <input type="file" name="image" ref={input=> {this.filesInput = input;}} />
                  <input type="submit" value="Create" />
                 </form>
            </div>
        )
    };

}

export default AdminCreateArtworks;
