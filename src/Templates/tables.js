import React from "react";
import { MDBDataTable } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Tables = props => {

//This function is used for Searching within Table and render only searched item
  const searchFieldChangeHandler = event => {
    let keyword = event.target.value;
    let filteredData = props.state.tableData.filter(item => {
      return item[String('name')].indexOf(keyword) > -1;
    });

    //SETSTATE is not setting state, it is calling function passed in props which is setting state
    props.setState({
      filtered: filteredData
    });
    
    //Case for No Result
    if ((keyword !== "") & (props.state.filtered.length === 0)) {
      props.setState({
        noResult: true
      });
    }
  };

  const SearchBar = () => {
    return (
      <div className="container-fluid">
       
          <div className="form-group searchBar col-md-3 col-lg-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={event => searchFieldChangeHandler(event)}
            />
        </div>
      </div>
    );
  };

  const data = () => {
    //headings is passed in props
    let headings = props.headings;
    //tableData are datas to be rendered in tabular format
    let tableData = props.tableData;
    let actions = props.actions;
    let data = {};
    //Manually added first and Last column of Table which is absent in props.heading
    let remainingColumns = [
      {
        label: "S.N",
        sort: "asc",
        field: "sn"
      },
      {
        label: "Action",
        sort: ""
      }
    ];
    //to make SN first column and Action Last column
    let columns = [remainingColumns[0], ...headings, remainingColumns[1]];
    console.log(tableData)
    let rows = tableData.map((datas, index) => {
      //   console.log(datas);
      let tempData = {};
      tempData["sn"] = index + 1;
      for (let key in datas) {
        if (key != "id") {
          tempData[key] = datas[key];

        }
      }
      //Adding Icon/Button in Action Column in every row
      let actionTemplate = actions.map((action, index) => {
        // console.log("ID", datas.id);
        let templates = null
        if (action.hasOwnProperty('onClick')){
          templates = (
            <button className = "btn-xs btn-primary" onClick = {()=>action.onClick(datas["id"])}>Receive Package</button>
          )
        }
        else {
        templates = (
          <Link to={`${action.link}${datas["id"]}`}>

            <FontAwesomeIcon  icon={action.icon} />
             
          </Link>
        );
      }
        return templates;
      });
      tempData["action"] = actionTemplate;
            return tempData;
    });

    data["columns"] = columns;
    data["rows"] = rows;
    return data;
  };
 
  return (
    <div>
      {SearchBar()}
      <MDBDataTable
        className="xxx"
        searching={false}
        data={data()}
        tBodyColor="white"
        bordered
        sortable
      />

      <style jsx>
          {`
          .searchBar
          {
              float:right;
              margin-top: 5px;
              margin-bottom:-5px;
          }
          
          `}
      </style>
    </div>
  );
};
export default Tables;
