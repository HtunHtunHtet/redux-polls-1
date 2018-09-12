import React, { Component } from 'react'
import {handleInititalData} from "../actions/shared"
import {connect} from 'react-redux'

//components
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Leaderboard from './Leadearboard'
import AddPoll from './AddPoll'
import Poll from "./Poll";

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleInititalData())
  }

  render() {

    return (
      <div>
          <LoadingBar/>
          {this.props.loading === true
            ? null
              : <Poll match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>}
          }
      </div>
    )
  }
}

//loading func
function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)