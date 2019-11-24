import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class SubjectItem extends React.Component {

    constructor() {
        super();
        this.DeleteSubject = this.DeleteSubject.bind(this);
    }

    DeleteSubject(e) {
        Axios.delete("http://localhost:4000/api/subjects/" + this.props.subject._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div>
                <hr></hr>
                <p>Subject: {this.props.subject.name}</p>
                <p>Credits: {this.props.subject.credits}</p>
                <Link to={"/update/" + this.props.subject._id} className="btn btn-primary">Edit</Link><br></br>
                <Link to={"/createAssessment/" + this.props.subject._id} className="btn btn-primary">Create Assessment</Link>
                <br></br>
                <button onClick={this.DeleteSubject}>Delete</button>
                <hr></hr>
            </div>
        );
    }
}

export default SubjectItem;