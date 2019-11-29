import React from 'react';
import '../App.css';
import Axios from 'axios';

class CreateAssessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            Title: '',
            Credits: 0,
            Assessments: [],
            AssessmentTitle: '',
            AssessmentWeight: 0
          };
        
        this.handleChangedAssessmentTitle = this.handleChangedAssessmentTitle.bind(this);
        this.handleChangedAssessmentWeight = this.handleChangedAssessmentWeight.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangedAssessmentTitle(e) {
        this.setState({ AssessmentTitle: e.target.value });
    }

    handleChangedAssessmentWeight(e) {
        this.setState({ AssessmentWeight: e.target.value });
    }

    handleSubmit(e) {
        
        e.preventDefault();


        const newAssessment = {
            title: this.state.AssessmentTitle,
            weight: this.state.AssessmentWeight
        }

        const newSubject = {
            name: this.state.Name,
            credits: this.state.Credits,
            assessments: this.state.Assessments
        }
        //console.log(newSubject);

        newSubject.assessments.push(newAssessment);

        //console.log(newSubject);

        

        Axios.put("http://localhost:4000/api/subjects/" + this.state._id, newSubject)
        .then()
        .catch();


        //console.log(newAssessment);
        //parentSubjectObject.assessments.push(newAssessment);

        //console.log(parentSubjectObject);

        this.setState({
            AssessmentTitle: '',
            AssessmentWeight: ''
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/subjects/' + this.props.match.params.id)
          .then((response) => {
            this.setState({
                _id: response.data._id,
                Name: response.data.name,
                Credits: response.data.credits,
                Assessments: response.data.Assessments
              })
          })
          .catch();
      }

    render() {
        return (
            <div className="CreateAssessment">
                <h1>DEBUG - CREATE ASSESSMENT COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Assessment Name:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentTitle} onChange={this.handleChangedAssessmentTitle} />
                    </div>
                    <div className="form-group">
                        <label>Assessment Weight:</label>
                        <input type="text" className="form-control" value={this.state.AssessmentWeight} onChange={this.handleChangedAssessmentWeight} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateAssessment;