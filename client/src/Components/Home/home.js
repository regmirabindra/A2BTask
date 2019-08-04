import React from 'react'

//Components
import StudentInfoTable from './studentTable.js'
import AddStudent from './addStudent.js'
import {Redirect} from 'react-router-dom'

class Home extends React.Component {
    state= {
        selectedTab:'studentInfo',
        loggedIn: false,
    }

    componentWillMount = () =>{
        
        if (this.props.location.state!==undefined)
        {
            this.setState({
                loggedIn:this.props.location.state.loggedIn
            })
        }
        
    }
    tabClickHandler(event){
        let activeElement =document.getElementsByClassName('active')
        for(let element of activeElement)
        {
            element.classList.remove ('active')
        }
        let element = document.getElementById(`${event.target.id}`)
        element.classList.add("active")
        this.setState({
            selectedTab:event.target.id
        })
      }
      renderContent=()=>{
        if (this.state.selectedTab==='studentInfo')
        {
            return (
                <StudentInfoTable/>

            )
        }
        else
        {
            return (
                <AddStudent/>
            )
        }
      }
    render(){
        if(!this.state.loggedIn)
        {
            return <Redirect to= "/login"/>
        }

        return (
            <div>
                   <ul className="nav nav-tabs">
                    <li onClick = {event =>this.tabClickHandler(event)} className="nav-item">
                        <span id = "studentInfo" className = "nav-link active">Student Info</span>
                    </li>
                    <li onClick = {event =>this.tabClickHandler(event)} className="nav-item">
                        <span id = "addStudent"className="nav-link" href="#">Add New Student</span>
                    </li>
 
                    </ul>
                    {this.renderContent()}

            </div>
        )
    }
}

export default Home;