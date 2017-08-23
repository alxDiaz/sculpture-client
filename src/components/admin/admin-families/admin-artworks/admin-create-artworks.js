import React from 'react';
import axios from 'axios';

class AdminCreateArtworks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            family: "599839f18021084ccb27cb3e",
            material: '',
            specs: '',
<<<<<<< HEAD
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
=======
            file: null
>>>>>>> master
        }
        
        this.formData = new FormData();
        this.api = 'http://localhost:27017/api/artworks';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
<<<<<<< HEAD
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
=======
        this._handleImageChange = this._handleImageChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    handleSubmit(event) {
        const files = this.filesInput.files;
        event.preventDefault();
        console.log(files[0]);
        this.fileUpload(files[0])
            .then(response => console.log(response.data))


    //     console.log(this.state.file);
    //     axios.post(this.api,{
    //     name: this.state.name,
    //     family: this.state.family,
    //     material: this.state.material,
    //     specs: this.state.specs,
    //     file: this.state.file
    //   })
    //   .then(res => {
    //       console.log(res);
        
    // })
    //     .catch(error => console.log(error))
    }

    fileUpload(file){
       // const formData = new formData();
        
        this.formData.append('image', file);
        this.formData.append('name', this.state.name);
        this.formData.append('family', this.state.family);
        this.formData.append('material', this.state.material);

        const config = {
            headers: { 'content-type': 'multypart/form-data'
            }
        }
       
        return axios.post(this.api, this.formData, config);
>>>>>>> master
    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

<<<<<<< HEAD
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
=======
    _handleImageChange(e) {
        this.setState({file:e.target.files[0]});
    // e.preventDefault();
    // let reader = new FileReader();
    // let file = e.target.files[0];
    // reader.onloadend = () => {
    //   this.setState({
    //     file: file,
    //   });
    // }
    // reader.readAsDataURL(file)
  }
>>>>>>> master

    render(){
        return (
            <div className="admin-create-artworks" >
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                  <input type="text" placeholder="Material" name="material" value={this.state.material} onChange={this.handleChange} />
                  <input type="text" placeholder="Specs" name="specs" value={this.state.specs} onChange={this.handleChange} />
<<<<<<< HEAD
                  <input type="file" ref="file" name="image" onChange={this.handleChangeFile}/>
                  <input type="submit" value="Save"/>
                 </form>
=======
                  <input type="file" name="image" ref={(input)=> {this.filesInput = input;}}  onChange={this._handleImageChange}/>
                  <input type="submit" value="Save" />
                 </form>
                <p>{this.state.name}</p>
>>>>>>> master
            </div>
        )
    };

}

export default AdminCreateArtworks;
