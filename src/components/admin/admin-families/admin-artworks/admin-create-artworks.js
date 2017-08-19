import React from 'react';

class AdminCreateArtworks extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            family: this.props.family._id,
            material: '',
            specs: '',
            image: ''
        }

    }

    handleChange(event){
        return this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div className="admin-create-artworks" >
                <input type="text" placeholder="Name" name="name" value={ this.state.name} onChange={this.handleChange()} />
                <p>{this.state.name}</p>
                {console.log("hola")}
            </div>
        )
    };

}

export default AdminCreateArtworks;
