import React from 'react';
import '../App.css';
import Axios from 'axios';

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
                <h1>DEBUG - READ COMPONENT</h1>
            </div>
        );
    }
}

export default Read;