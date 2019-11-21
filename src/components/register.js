import React from 'react';
import '../App.css';
import Axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: ''
        }

        this.handleChangedUsername = this.handleChangedUsername.bind(this);
        this.handleChangedPassword = this.handleChangedPassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedUsername(e) {
        this.setState({Username: e.target.value});
    }
    handleChangedPassword(e) {
        this.setState({Password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault(); //TODO: lookup

        const newUser = {
            username: this.state.Username,
            password: this.state.Password
        }

        Axios.get('http://localhost:4000/reg/' + this.props.match.params.username)
        .then()
        .catch();

        // Axios.post("http://localhost:4000/reg", newUser)
        // .then()
        // .catch();

        // const regStatus = await UserRegistration(data);
        // if(regStatus === 200) {

        //     this.setState({
        //         Username: '',
        //         Password: ''
        //     })
        // }
        // else {
        //     this.setState({
        //         error: true,
        //         register: false
        //     })
        // }



        
    }


    render() {
        return (
            <div>
                <h1>DEBUG - REGISTRATION COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" value={this.state.Username} onChange={this.handleChangedUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control" value={this.state.Password} onChange={this.handleChangedPassword}/>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

export default Login;