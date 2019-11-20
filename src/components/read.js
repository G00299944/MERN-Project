import React from 'react';
import '../App.css';
import Axios from 'axios';

import Assessments from '../components/assessments'

class Read extends React.Component {

    state = {
        Assessments: []
    };

    componentDidMount() {
        Axios.get("http://localhost:4000/api/assessments")
        .then((res) => {
            this.setState({Assessments: res.data.assessments})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Assessments myAssessments={this.state.Assessments}></Assessments>
            </div>
        );
    }
}

export default Read;