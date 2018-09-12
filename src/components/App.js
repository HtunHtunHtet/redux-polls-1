import React, { Component } from 'react'
import {handleInititalData} from "../actions/shared"
import {connect} from 'react-redux'

//components
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leadearboard'

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
            :<Leaderboard/> //<Dashboard/>
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