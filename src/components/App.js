import React, { Component } from 'react'
import {handleInititalData} from "../actions/shared";
import {connect} from 'react-redux'

//components
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleInititalData())
  }

  render() {
    return (
      <div>
          {this.props.loading === true
            ? null
            :<Dashboard/>
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