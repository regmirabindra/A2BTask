import React from 'react'

//Components
import StudentInfoTable from './studentTable.js'
import AddStudent from './addStudent.js'

class Home extends React.Component {
    state= {
        selectedTab:'studentInfo'
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
        return (
            <div>
                   <ul className="nav nav-tabs">
                    <li onClick = {event =>this.tabClickHandler(event)} className="nav-item">
                        <span id = "studentInfo" className = "nav-link active">Student Info</span>
                    </li>
                    <li onClick = {event =>this.tabClickHandler(event)} className="nav-item">
                        <span id = "addStudent"className="nav-link" href="#">Link</span>
                    </li>
 
                    </ul>
                    {this.renderContent()}

            </div>
        )
    }
}

export default Home;