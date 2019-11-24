import React from 'react';
import '../App.css';
import Axios from 'axios';

class CreateAssessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Credits: 0,
            Assessments: [
                {
                    AssessmentName: '',
                    Weight: 0,
                    Grade: 0
                }
            ]
        }
    }

    handleChangedAssessmentName(e) {
        this.setState({Assessments: e.state.Assessments.AssessmentName});
        console.log(e.state.Assessments.AssessmentName);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newAssessment = {
            AssessmentName: this.state.Assessments.AssessmentName
        }

        console.log(newAssessment);
    }

    render() {
        return (
            <div className="CreateAssessment">
                <h1>DEBUG - CREATE ASSESSMENT COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Assessment:</label>
                        <input type="text" className="form-control" value={this.state.Assessments.AssessmentName} onChange={this.handleChangedAssessmentName} />
                    </div>
                    {/* <div className="form-group">
                        <label>Date:</label>
                        <input type="text" className="form-control" value={this.state.Subject} onChange={this.handleChangedSubjectCredits} />
                    </div>
                    <div className="form-group">
                        <label>Weight:</label>
                        <input type="text" className="form-control" value={this.state.Subject} onChange={this.handleChangedSubjectCredits} />
                    </div>
                    <div className="form-group">
                        <label>Grade:</label>
                        <input type="text" className="form-control" value={this.state.Subject} onChange={this.handleChangedSubjectCredits} />
                    </div> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateAssessment;