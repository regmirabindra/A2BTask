import React, { Component } from "react";
import FormFields from '../../Templates/forms.js';
import StudentInfoTable from '../Home/studentTable.js'
class AddNewStudent extends Component {
  state = {
    formData: {
      studentName: {
        element: "input",
        value: "",
        label: true,
        labelText: "Student Name",
        config: {
          name: "studentName_input",
          type: "text",
          placeholder: "Enter Student Name"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      class: {
        element: "select",
        value: "",
        label: true,
        labelText: "Class",
        config: {
          name: "Class",
          options: [
              {val:'One', text: 'One'},
              {val:'Two', text: 'Two'},
              {val:'Three', text: 'Three'},
              {val:'Four', text: 'Four'},
              {val:'Five', text: 'Five'},
              {val:'Six', text: 'Six'},
              {val:'Seven', text: 'Seven'},
              {val:'Eight', text: 'Eight'},
              {val:'Nine', text: 'Nine'},
              {val:'Ten', text: 'Ten'},


          ]
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      age: {
        element: "input",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "age_input",
          type: "number",
          placeholder: "Enter Age"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      rollNumber: {
        element: "input",
        value: "",
        label: true,
        labelText: "Roll Number",
        config: {
          name: "rollNumber_input",
          type: "text",
          placeholder: "Enter Roll Number of Student"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      emailID: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Code",
        config: {
          name: "lastCode_input",
          type: "text",
          placeholder: "Enter Email ID of Student"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      phoneNumber: {
        element: "input",
        value: "",
        label: true,
        labelText: "Phone Number",
        config: {
          name: "phoneNumber_input",
          type: "text",
          placeholder: "Enter Phone Number of Student"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      address: {
        element: "input",
        value: "",
        label: true,
        labelText: "Address",
        config: {
          name: "address_input",
          type: "text",
          placeholder: "Enter Address of Student"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
    profilePicture: {
        element: "file",
        value: "",
        label: true,
        labelText: "Upload Picture",
        config: {
          name: "picture_file",
          type: "text",
          placeholder: "Enter Address of Student"
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationText: ""
      },
      
    },
    posted: false,
    errorOnSubmission: false,
    errorText: "",
    postedData: []
  };

  updateForm = newState => {
    this.setState({
      formData: newState
    });
  };

  submitForm = event => {
    let dataToSubmit = {};
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }
    this.setState ({
        posted:true
    })
    console.log(dataToSubmit);

    
  };

  errorCheck = () => {
    const { errorOnSubmission, errorText } = this.state;
    if (errorOnSubmission) {
      return <p>{errorText}</p>;
    }
  };

  loadForm = () => {
    return (
      <form
        className="main-form"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        {this.errorCheck()}
        <FormFields
          formData={this.state.formData}
          change={newState => this.updateForm(newState)}
        />
        <button
          className="btn btn-primary"
          id="save"
          onClick={event => this.submitForm(event)}
          type="submit"
        >
          Save
        </button>
        <button
          className="btn btn-secondary"
          type="reset"
          id="snc"
          onClick={event => this.submitForm(event)}
        >
          Save and Continue
        </button>
      </form>
    );
  };

  mainContent = () => {
    let { postedData, posted } = this.state;

    if (posted) {
      return (
        <div className="p">
          <div className="left-floated-form">{this.loadForm()}</div>
          <div>
            <StudentInfoTable postedData={postedData} />
          </div>
        </div>
      );
    }else {
      return <div>{this.loadForm()}</div>;
    }
  };

  render() {
    return <div className="container-fluid">{this.mainContent()}</div>;
  }
}

export default AddNewStudent;
