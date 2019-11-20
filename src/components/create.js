import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Subject: '',
            Weight: '',
            Grade: ''
        }
        
        this.handleChangedAssessmentName = this.handleChangedAssessmentName.bind(this);
        this.handleChangedAssessmentSubject = this.handleChangedAssessmentSubject.bind(this);
        this.handleChangedAssessmentWeight = this.handleChangedAssessmentWeight.bind(this);
        this.handleChangedAssessmentGrade = this.handleChangedAssessmentGrade.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangedAssessmentName(e) {
        this.setState({ Name: e.target.value });
    }
    handleChangedAssessmentSubject(e) {
        this.setState({ Subject: e.target.value });
    }
    handleChangedAssessmentWeight(e) {
        this.setState({ Weight: e.target.value });
    }
    handleChangedAssessmentGrade(e) {
        this.setState({ Grade: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newAssessment = {
            name: this.state.Name,
            subject: this.state.Subject,
            weight: this.state.Weight,
            grade: this.state.Grade
        }

        Axios.post("http://localhost:4000/api/assessments", newAssessment)
            .then()
            .catch();

        this.setState({
            Name: '',
            Subject: '',
            Weight: 0,
            Grade: 0
        })
    }

    render() {
        return (
            <div className="Create">
                <h1>DEBUG - CREATE COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Assessment:</label>
                        <input type="text" className="form-control" value={this.state.Name} onChange={this.handleChangedAssessmentName} />
                    </div>
                    <div className="form-group">
                        <label>Module:</label>
                        <input type="text" className="form-control" value={this.state.Subject} onChange={this.handleChangedAssessmentSubject} />
                    </div>
                    <div className="form-group">
                        <label>Weight:</label>
                        <input type="text" className="form-control" value={this.state.Weight} onChange={this.handleChangedAssessmentWeight} />
                    </div>
                    <div className="form-group">
                        <label>Grade:</label>
                        <input type="text" className="form-control" value={this.state.Grade} onChange={this.handleChangedAssessmentGrade} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;