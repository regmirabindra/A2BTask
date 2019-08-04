import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faKey,faAddressBook,faMailBulk,faMobile, faBirthdayCake, faGenderless} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import FormField from './Forms/formfields.js'
class SignUp extends React.Component {
   state = {
       formData: {
        firstName: {
            element: "input",
            icon : faUser,
            value: "",
            config: {
              name: "firstName_input",
              type: "text",
              placeholder: "Enter First Name"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          lastName: {
            element: "input",
            value: "",
            icon :faUser,
            config: {
              name: "lastName_input",
              type: "text",
              placeholder: "Enter Last Name"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          email: {
            element: "input",
            value: "",
            icon :faAddressBook,
            config: {
              name: "email_input",
              type: "email",
              placeholder: "Enter your Email"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          mobileNumber: {
            element: "input",
            value: "",
            icon :faMobile,
            config: {
              name: "mobileNumber_input",
              type: "phone",
              placeholder: "Enter your Mobile Number"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          birthDay: {
            element: "input",
            value: "",
            icon :faBirthdayCake,
            config: {
              name: "mobileNumber_input",
              type: "date",
              placeholder: "Enter Your Birth Day"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          gender: {
            element: "radio",
            value: "",
            icon :faGenderless,
            config: {
              name: "mobileNumber_input",
              options :[
                  {val:'M', text:'Male'},
                  {val:'F', text:'Female'},
                  {val:'O', text:'Others'}
              ]

            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },

       }
   }
   updateForm = newState => {
    this.setState({
      formData: newState
    });
  };
  componentDidMount = () =>
  {
      document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1564587671830-bbe61bf63cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
      document.body.style.backgroundSize = "cover"
  }
  componentWillUnmount = () =>
  {
      document.body.style.backgroundImage = null
      
  }
  submitSignUpForm = event => {
      
    let dataToSubmit = {};
      for (let key in this.state.formData) {
          dataToSubmit[key] = this.state.formData[key].value;
  }
  console.log(dataToSubmit);
}
    
    render(){
        return (
        <div className = "container-fluid">
            <div className = "container">
                <form className = "login-form" onSubmit = {event=>event.preventDefault()}>
                    <div className = "login-wrap">
                        <p className = "login-img">
                            <FontAwesomeIcon icon = {faLock}/>
                        </p>
                        <FormField
                                formData={this.state.formData}
                                change={newState => this.updateForm(newState)}
                        />
                        <button className = "btn btn-primary btn-lg btn-block"
                        onClick = {()=>this.submitSignUpForm()}
                        >Sign Up</button>
                        <p style = {{color:'black',marginTop:'15px'}}>Already Have an account? <Link to= '/login'>Log In.</Link></p>
                    </div>

                </form>

            </div>
        </div>
        
    )
}
}
export default SignUp;




