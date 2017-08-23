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
            image: '',
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
        this.handleChangeFile = this.handleChangeFile.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.image)
      axios.post(this.api, {
        name: this.state.name,
        family: this.state.family,
        material: this.state.material,
        specs: this.state.specs,
        image: this.state.image,
        fieldname: event.target.file.fieldname,
        originalname: event.target.file.originalname,
        encoding: event.target.file.encoding,
        mimetype: event.target.file.mimetype,
        destination: event.target.file.destination,
        filename: event.target.file.filename,
        path: event.target.file.path,
        size: event.target.file.size
      })
      .then(res => console.log(res))
      .catch(error => console.log(error))
    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    handleChangeFile(event) {
      this.setState({image: event.target.files[0]})
    }

  //PUPURRI FINISHES
  //---------------------------------------------------------
    // handleChangeFile(event) {
    //
    //   event.preventDefault();
    //
    // let reader = new FileReader();
    // let file = event.target.files[0];
    //
    // reader.onloadend = () => {
    //   this.setState({
    //     image: file,
    //   });
    // }
    //
    // reader.readAsDataURL(file)
    // }

    render(){
        return (
            <div className="admin-create-artworks" >
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                  <input type="text" placeholder="Material" name="material" value={this.state.material} onChange={this.handleChange} />
                  <input type="text" placeholder="Specs" name="specs" value={this.state.specs} onChange={this.handleChange} />
                  <input type="file" ref="file" name="image" onChange={this.handleChangeFile}/>
                  <input type="submit" value="Save"/>
                 </form>
            </div>
        )
    };

}

export default AdminCreateArtworks;
