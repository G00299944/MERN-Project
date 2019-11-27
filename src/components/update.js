import React from 'react';
import '../App.css';
import Axios from 'axios';

class Update extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Credits: 0,
      _id: '',
      Assessments: []
    };

    this.handleChangedSubjectName = this.handleChangedSubjectName.bind(this);    
    this.handleChangedSubjectCredits = this.handleChangedSubjectCredits.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangedSubjectName(e) {
    this.setState({Name: e.target.value});
  }

  handleChangedSubjectCredits(e) {
    this.setState({Credits: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const newSubject = {
      name: this.state.Name,
      credits: this.state.Credits
    }

    // const newAssessment = {
    //   title
    // }

    newSubject.Assessments.push(newAssessment);

    Axios.put("http://localhost:4000/api/subjects/" + this.state._id, newSubject)
      .then()
      .catch();

    this.setState({
      Name: '',
      Credits: 0
    })
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/api/subjects/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Name: response.data.name,
          Credits: response.data.credits
        })
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h1>DEBUG - UPDATE COMPONENT</h1>
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

export default Update;
