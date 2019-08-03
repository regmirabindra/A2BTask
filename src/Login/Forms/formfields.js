import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../Login/login.css'

const formFields = props => {
  

  const renderFields = () => {
    const formArray = [];
    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      });
    }
    return formArray.map((item, i) => {
      return <div key={i}>{renderTemplates(item)}</div>;
    });
  };
  const showLabel = (label, labelText) => {
    return label ? (
      <label class="col-sm-4 col-form-label">{labelText}</label>
    ) : null;
  };


  const changeHandler = (event, id) => {
    const newState = props.formData;
    newState[id].value = event.target.value;
    let validateData = validate(newState[id]);
    newState[id].valid = validateData[0];
    newState[id].validationMessage = validateData[1];
    
    props.change(newState, id);
  };

  const validate = element => {
    let error = [true, ""];
    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;

      error = !valid ? [valid, message] : error;
    }
    return error;
  };



  
  const renderTemplates = data => {
    let values = data.settings;
    let formTemplate = "";

    switch (values.element) {
      case "input":
        formTemplate = (
          <div class="input-group">
            <span className = "input-group-addon">
                <FontAwesomeIcon icon = {values.icon}/>
            </span>
              <input
                className="form-control"
                {...values.config}
                value={values.value}
                onChange={event => changeHandler(event, data.id)}
              />
            </div>
        );

        break;
      case "radio":
        formTemplate = (
          <div className="form-group">
            <div className="radio-label">
              {showLabel(values.label, values.labelText)}
            </div>

            {values.config.options.map((item, i) => (
              <div className="form-check form-check-inline">
                <input
                  key={i}
                  class="form-check-input"
                  type="radio"
                  name="status"
                  id={`for-${i}`}
                  value={item.val}
                  onChange={event => changeHandler(event, data.id)}
                />
                <label class="form-check-label">{item.text}</label>
              </div>
            ))}
          </div>
        );
        break;

      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return (
      <div>
          {renderFields()}
           
      </div>
  )
};

export default formFields;
