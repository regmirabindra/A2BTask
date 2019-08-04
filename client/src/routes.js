import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'

//COmponents
import Login from './Login/login.js'
import SignUp from './Login/signup.js'
import Home from './Components/Home/studentTable.js/index.js'
class Routes extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route path= "/login" exact component = {Login}/>
                    <Route path = "/signup" exact  component = {SignUp}/>
                    <Route path = "/" exact component = {Home}/>
                
                </Switch>    
            </div>
        )
    }
}
export default Routes;