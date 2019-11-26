import React from 'react';
import '../App.css';
import AssessmentItem from '../components/assessmentItem';

class Subjects extends React.Component {
    
    render() {
        return this.props.myAssessments.map((asssessment) => {
            return <AssessmentItem asssessment={asssessment}></AssessmentItem>
        })
    }
}

export default Subjects