import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


class Login extends React.Component {

    render() {
        return (
            <div>
                <h1>DEBUG - LOGIN COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <input type="submit" value="Submit" />
                    <br></br>
                    <Link to={"/register/"} className="btn btn-primary">Register</Link>
                </form>
            </div>
        );
    }
}

export default Login;