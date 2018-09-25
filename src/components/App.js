import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import {handleInititalData} from "../actions/shared"
import {connect} from 'react-redux'

//components
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Leaderboard from './Leadearboard'
import AddPoll from './AddPoll'
import Nav from './Nav'
import Poll from "./Poll"

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleInititalData())
  }

render() {
    return (
        <Router>
            <Fragment>
                <LoadingBar />
                <div className='container'>
                    <Nav />
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/leaderboard' component={Leaderboard} />
                            <Route path='/polls/:id' component={Poll} />
                            <Route path='/add' component={AddPoll} />
                        </div>}
                </div>
            </Fragment>
        </Router>
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