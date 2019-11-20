import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Subject: '',
            Weight: 0,
            Grade: 0
        }

    }

    handleChangedAssessmentName(e) {
        this.setState({Name: e.target.value});
    }
    handleChangedAssessmentSubject(e) {
        this.setState({Subject: e.target.value});
    }
    handleChangedAssessmentWeight(e) {
        this.setState({Weight: e.target.value});
    }
    handleChangedAssessmentGrade(e) {
        this.setState({Grade: e.target.value});
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
            <div>
                <h1>DEBUG - CREATE COMPONENT</h1>
            </div>
        );
    }
}

export default Create;