import React from 'react';
import '../App.css';
import Axios from 'axios';

class CreateAssessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Weight: ''
        };
        
        this.handleChangedAssessmentTitle = this.handleChangedAssessmentTitle.bind(this);
        this.handleChangedAssessmentWeight = this.handleChangedAssessmentWeight.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedAssessmentTitle(e) {
        this.setState({ Title: e.target.value });
    }

    handleChangedAssessmentWeight(e) {
        this.setState({ Weight: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newAssessment = {
            title: this.state.Title,
            weight: this.state.Weight
        }
        console.log(newAssessment);

        this.setState({
            Title: '',
            Credits: ''
        })
    }

    render() {
        return (
            <div className="CreateAssessment">
                <h1>DEBUG - CREATE ASSESSMENT COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Assessment Name:</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangedAssessmentTitle} />
                    </div>
                    <div className="form-group">
                        <label>Assessment Weight:</label>
                        <input type="text" className="form-control" value={this.state.Weight} onChange={this.handleChangedAssessmentWeight} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateAssessment;