import logger from './logger'
import {applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(logger,thunk))