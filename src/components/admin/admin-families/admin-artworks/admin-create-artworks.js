import React from 'react';
import axios from 'axios';

class AdminCreateArtworks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            family: this.props.family._id,
            material: '',
            specs: '',
            // image: '',
            // fieldname: '',
            // originalname: '',
            // encoding: '',
            // mimetype: '',
            // destination: '',
            // filename: '',
            // path: '',
            // size: ''
        }

        this.api = 'http://localhost:27017/api/artworks';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

      axios.post(this.api, {
        name: this.state.name,
        material: this.state.material,
        specs: this.state.specs,
        // image: event.target.file,
        // fieldname: event.target.file.fieldname,
        // originalname: event.target.file.originalname,
        // encoding: event.target.file.encoding,
        // mimetype: event.target.file.mimetype,
        // destination: event.target.file.destination,
        // filename: event.target.file.filename,
        // path: event.target.file.path,
        // size: event.target.file.size
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    handleUploadFile(event) {
      const data = new FormData();
      return this.setState({image: data.append('image', event.target.files[0])})
    }

    render(){
        return (
            <div className="admin-create-artworks" >
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                  <input type="text" placeholder="Material" name="material" value={this.state.material} onChange={this.handleChange} />
                  <input type="text" placeholder="Specs" name="specs" value={this.state.specs} onChange={this.handleChange} />
                  <input type="file" ref="file" name="image" value={this.state.image} onChange={this.handleChange}/>
                  <input type="submit" value="Save"/>
                 </form>
                <p>{this.state.name}</p>
                {console.log("hola")}
            </div>
        )
    };

}

export default AdminCreateArtworks;
