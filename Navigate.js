import React, {Component} from 'react'
import SignNavi from './stepx/navigation/signNavi'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

//create a compnent
export default class App extends Component{
    render(){

        const state= createStore(reducers,{},applyMiddleware(ReduxThunk))

        return(
           <Provider store={state}>
               <SignNavi/>
           </Provider>
        )
    }
}