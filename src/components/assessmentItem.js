import React from 'react';
import '../App.css';

class AssessmentItem extends React.Component {

    render() {
        return (
            <div>
                <hr></hr>
                <p>Module: {this.props.assessment.subject}</p>
                <p>Assessment: {this.props.assessment.name}</p>
                <p>Weight: {this.props.assessment.weight}</p>
                <p>Grade: {this.props.assessment.grade}%</p>
                <hr></hr>
            </div>
        );
    }
}

export default AssessmentItem;