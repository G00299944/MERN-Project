import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class AssessmentItem extends React.Component {

    constructor() {
        super();
        this.DeleteAssessment = this.DeleteAssessment.bind(this);
    }

    DeleteAssessment(e) { 
        Axios.delete("http://localhost:4000/api/assessments/" + this.props.assessment._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div>
                <hr></hr>
                <p>Module: {this.props.assessment.subject}</p>
                <p>Assessment: {this.props.assessment.name}</p>
                <p>Weight: {this.props.assessment.weight}</p>
                <p>Grade: {this.props.assessment.grade}%</p>
                <Link to={"/update/" + this.props.assessment._id} className="btn btn-primary">Edit</Link>
                <br></br>
                <button onClick={this.DeleteAssessment}>Delete</button>
                <hr></hr>
            </div>
        );
    }
}

export default AssessmentItem;