import React from 'react';
import '../App.css';

import AssessmentItem from '../components/assessmentItem';

class Assessments extends React.Component {
    
    render() {
        return this.props.myAssessments.map((assessment) => {
            return <AssessmentItem assessment={assessment}></AssessmentItem>
        })
    }
}

export default Assessments