import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class AssessmentItem extends React.Component {

    render() {
        return (
            <div>
                <hr></hr>
                <p>Module: {this.props.assessment.subject}</p>
                <p>Assessment: {this.props.assessment.name}</p>
                <p>Weight: {this.props.assessment.weight}</p>
                <p>Grade: {this.props.assessment.grade}%</p>
                <Link to={"/update/" + this.props.assessment._id} className="btn btn-primary">Edit</Link>
                <hr></hr>
            </div>
        );
    }
}

export default AssessmentItem;