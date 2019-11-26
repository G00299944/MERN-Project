import React from 'react';
import '../App.css';

class AssessmentItem extends React.Component {
 
    render() {
        return (

            <div>
                <p>{this.props.asssessment.Title}</p>
            </div>
        );
    }
}

export default AssessmentItem;