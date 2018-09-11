import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                Dashboard
            </div>
        )
    }
}

/*
function mapStateToProps ({ authedUser, polls, users }) {


    const answers = users[authedUser].answers

    const answered  = answers.map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp)

    const unanswered  = Object.keys(polls)
        .filter((id) => !answers.include(id))
        .map((id) => polls[id])
        .sort((a,b) => b.timestamp-a.timestamp)

    return {
        answered,
        unanswered
    }
}
*/

export default connect()(Dashboard)