import {savePoll} from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS  = 'RECEIVE_POLLS'
export const ADD_POLL  = 'ADD_POLL'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function handleAddPoll (poll) {
    return (dispatch, getState) =>{
        const { authedUser } = getState()

        dispatch(showLoading())

        return savePoll(
            {
                ...poll,
                author: authedUser
            }
        ).then((poll) => dispatch (addPolls(poll)))
            .then(()=>dispatch(hideLoading()))
    }
}

function addPolls (poll) {
    return {
        type: ADD_POLL,
        poll
    }
}