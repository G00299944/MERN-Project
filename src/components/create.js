import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Credits: '',
            AssessmentsCount: 0,
            Assessments: []
        }
        
        this.handleChangedSubjectTitle = this.handleChangedSubjectTitle.bind(this);
        this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);
        // //this.handleChangedSubjectAssessmentsCount = this.handleChangedSubjectAssessmentsCount.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangedSubjectTitle(e) {
        this.setState({ Title: e.target.value });
    }
    handleChangedSubjectCredits(e) {
        this.setState({ Credits: e.target.value });
    }
    // handleChangedSubjectAssessmentsCount(e) {
    //     this.setState({AssessmentsCount: e.target.value});
    // }

    handleSubmit(e) {
        e.preventDefault();

        const newSubject = {
            title: this.state.Title,
            credits: this.state.Credits,
            //assessmentsCount: this.state.AssessmentsCount,
            
            
        }

        console.log(newSubject);
        Axios.post("http://localhost:4000/api/subjects", newSubject)
            .then()
            .catch();

        this.setState({
            Title: '',
            Credits: ''
            //AssessmentsCount: ''
        })
    }

    render() {
        return (
            <div className="Create">
                <h1>DEBUG - CREATE COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Module Title:</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.handleChangedSubjectTitle} />
                    </div>
                    <div className="form-group">
                        <label>Credits:</label>
                        <input type="text" className="form-control" value={this.state.Credits} onChange={this.handleChangedSubjectCredits} />
                    </div>
                    {/* <div className="form-group">
                        <label>No. of Assessments:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentsCount} onChange={this.handleChangedSubjectAssessmentsCount} />
                    </div> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;