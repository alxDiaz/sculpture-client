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
        
        this.api = 'http://localhost:27017/api/medias';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const files = this.filesInput.files;
        console.log(files[0]);

        const formData = new FormData();

        formData.append('image', files[0]);
        formData.append('title', this.state.title);
        formData.append('source', this.state.source);
        formData.append('hyperlink', this.state.hyperlink);

        const config = {
            headers: { 'content-type': 'multypart/form-data' }
        }
       
        return axios.post(this.api, formData, config)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render(){
        return (
            <div className="admin-create-families" >
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
