import React from 'react'
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faKey, faAd,faAt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import FormField from './Forms/formfields.js'
class Login extends React.Component {
   state = {
       formData: {
        email: {
            element: "input",
            icon : faAt,
            value: "",
            config: {
              name: "username_input",
              type: "email",
              placeholder: "Email"
            },
            validation: {
              required: false
            },
            valid: true,
            touched: false,
            validationText: ""
          },
          password: {
            element: "input",
            value: "",
            icon :faKey,
            config: {
              name: "password_input",
              type: "password",
              placeholder: "Pasword"
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

  submitLoginForm = event => {
      
      let dataToSubmit = {};
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
    }
    console.log(dataToSubmit);
  }
    render(){
        return (
        <div className = "login-body container-fluid">
            <div className = "container">
                <form className = "login-form" onSubmit={event => {
                        event.preventDefault();
                }}>
                    <div className = "login-wrap">
                        <p className = "login-img">
                            <FontAwesomeIcon icon = {faLock}/>
                        </p>
                        <FormField
                                formData={this.state.formData}
                                change={newState => this.updateForm(newState)}
                        />
                        <button className = "btn btn-primary btn-lg btn-block" onClick = {event=>this.submitLoginForm()}>LOGIN</button>
                        <p style = {{color:'black',marginTop:'15px'}}>Don't Have an account? <Link to= '/signup'>Sign Up.</Link></p>
                    </div>

                </form>

            </div>
            

        </div>
        
    )
}
}
export default Login;




