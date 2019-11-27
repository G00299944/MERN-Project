import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Assessments from '../components/assessments';

class SubjectItem extends React.Component {

    render() {
        return (
            <div>
                {/* <h1>SUBJECT_ITEM COMPONENT</h1> */}
                <p>{this.props.subject.Title}</p>
                <Assessments myAssessments={this.props.subject.Assessments}></Assessments>
                <Link to={"/createAssessment/" + this.props.subject._id} className="btn btn-primary">Add Assessment</Link>
                <hr></hr>
            </div>
            
        );
    }

    // constructor() {
    //     super();
    //     this.DeleteSubject = this.DeleteSubject.bind(this);
    // }

    // DeleteSubject(e) {
    //     Axios.delete("http://localhost:4000/api/subjects/" + this.props.subject._id)
    //     .then()
    //     .catch();
    // }

    // render() {
    //     return (
    //         <div>
    //             <hr></hr>
    //             <p>Subject: {this.props.subject.name}</p>
    //             <p>Credits: {this.props.subject.credits}</p>
    //             <Link to={"/update/" + this.props.subject._id} className="btn btn-primary">Edit</Link><br></br>
    //             <Link to={"/createAssessment/" + this.props.subject._id} className="btn btn-primary">Create Assessment</Link>
    //             <br></br>
    //             <button onClick={this.DeleteSubject}>Delete</button>
    //             <hr></hr>
    //         </div>
    //     );
    // }
}

export default SubjectItem;