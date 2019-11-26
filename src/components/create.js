import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Credits: '',
            Assessments: []
        }
        
        this.handleChangedSubjectName = this.handleChangedSubjectName.bind(this);
        this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangedSubjectName(e) {
        this.setState({ Name: e.target.value });
    }
    handleChangedSubjectCredits(e) {
        this.setState({ Credits: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newSubject = {
            name: this.state.Name,
            credits: this.state.Credits
        }

        console.log(newSubject);
        Axios.post("http://localhost:4000/api/subjects", newSubject)
            .then()
            .catch();

        this.setState({
            Name: '',
            Credits: '',
            Assessments: []
        })
    }

    render() {
        return (
            <div className="Create">
                <h1>DEBUG - CREATE COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Subject:</label>
                        <input type="text" className="form-control" value={this.state.Name} onChange={this.handleChangedSubjectName} />
                    </div>
                    <div className="form-group">
                        <label>Credits:</label>
                        <input type="text" className="form-control" value={this.state.Subject} onChange={this.handleChangedSubjectCredits} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;