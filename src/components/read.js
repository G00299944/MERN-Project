import React from 'react';
import '../App.css';
import Axios from 'axios';

import Subjects from './subjects';

class Read extends React.Component {

    // state = {
    //     Subjects: []
    // };

    state = {
        
        Subjects: [{
            "Title": "Operating Systems",
            "Credits": 5,
            "Assessments": [
                {"Title": "Test", "Weight": 0.2, "Grade": 0},
                {"Title": "Exam", "Weight": 0.6, "Grade": 0},
                {"Title": "Project", "Weight": 0.2, "Grade": 0},
            ]
        },
        {
            "Title": "Object Oriented Programming",
            "Credits": 5,
            "Assessments": [
                {"Title": "Test 1", "Weight": 0.25, "Grade": 0},
                {"Title": "Test 2", "Weight": 0.25, "Grade": 0},
                {"Title": "Project", "Weight": 0.5, "Grade": 0},
            ]
        },
        {
            "Title": "Data Representation & Querying",
            "Credits": 5,
            "Assessments": [
                {"Title": "Project", "Weight": 0.5, "Grade": 0},
                {"Title": "Exam", "Weight": 0.5, "Grade": 0}
            ]
        }]
    }


    // componentDidMount() {
    //     Axios.get("http://localhost:4000/api/subjects")
    //     .then((res) => {
    //         this.setState({Subjects: res.data.subjects})
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>DEBUG - READ COMPONENT</h1>
    //             <Subjects mySubjects={this.state.Subjects}></Subjects>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div className="Read">
                <Subjects mySubjects={this.state.Subjects}></Subjects>
            </div>
        );
    }
}

export default Read;