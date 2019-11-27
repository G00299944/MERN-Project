import React from 'react';
import '../App.css';

import SubjectItem from '../components/subjectItem';

class Subjects extends React.Component {

    render() {
        return this.props.mySubjects.map((subject) => {
            console.log(subject);
            return <SubjectItem subject={subject}></SubjectItem>
        })
    }
    
    // render() {
    //     return this.props.mySubjects.map((subject) => {
    //         return <SubjectItem subject={subject}></SubjectItem>
    //     })
    // }
}

export default Subjects