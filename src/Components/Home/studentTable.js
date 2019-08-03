import React from 'react';
import Table from '../../Templates/tables.js'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
class StudentInfoTable extends React.Component {
    
    headings = [
        {
          label:"Student Name",
          sort:'asc',
          field:'name',
        },
        {
            label: 'Class',
            sort:'asc',
            field: 'class',
        },
        {
            label:'Student Email',
            sort:'asc',
            field: 'examID'
        },
    
       
    ]
    actions = [{
      text: 'Edit', 
      icon: faEdit, 
      link: '/',
      },
      {
      text: 'Delete', 
      icon: faTrash, 
      link: '/',
      },
      ]

    
    state = {
        tableData:[],
        isLoaded:false,
        filtered:[],
        noResult:false,
        searchBy:'sn',
        selectedTab: 'studentInfo'
    }
    statehandler=(states)=>{
        this.setState(states)
        console.log(this.state)
      }
    render(){
        return (
            <div>
              <Table
            headings = {this.headings}
            tableData = {this.state.noResult?this.state.filtered:this.state.tableData}
            state = {this.state}
            setState = {(states)=>this.statehandler(states)}
            actions = {this.actions}
        />
        <style jsx>
            {
                `
                
            
                .table2{
                    margin-top:10px;
                    margin-left:5px;
                    border-collapse:  separate;
                    margin-right:5px;
                    
                }
                .table thead
                {
                    
                    margin-right:5px;
                    color:white;
                    background: #1cafec;
                }
                
                tbody {
                    background: white;
                }
                tbody tr {
                    margin-right:5px;
                }
                thead th,tbody tr td {
                    text-align: center;
                }
                
                
                .action 
                {
                    display: inline-flex;
                }
                .action-element
                {
                    margin-left: 15px;
                }
                .dataTable thead:last-child
                {
                    display: none;
                }
                .dataTables_paginate
                {
                    float: right;
                }
                `
            }
        </style>
            </div>
        )
    }
}
export default StudentInfoTable;