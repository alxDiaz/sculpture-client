import React from 'react';
import axios from 'axios';

class AdminCreateMedia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            source: '',
            hyperlink: '',
        }
        
        this.formData = new FormData();
        this.api = 'http://localhost:27017/api/medias';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.formData.append('title', this.state.title);
        this.formData.append('source', this.state.source);
        this.formData.append('hyperlink', this.state.hyperlink);

        const config = {
            headers: { 'content-type': 'multypart/form-data'
            }
        }
       
        return axios.post(this.api, this.formData, config);
    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div className="admin-create-Media" >
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                  <input type="text" placeholder="Source" name="source" value={this.state.source} onChange={this.handleChange} />
                  <input type="text" placeholder="Hyperlink" name="hyperlink" value={this.state.specs} onChange={this.handleChange} />
                  <input type="file" name="image" ref={(input)=> {this.filesInput = input;}}/>
                  <input type="submit" value="Save" />
                 </form>
                <p>{this.state.name}</p>
            </div>
        )
    };

}

export default AdminCreateMedia;
