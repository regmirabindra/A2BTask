import React from 'react';
import Table from '../../Templates/tables.js'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import gql from 'graphql-tag';
import {Query} from 'react-apollo'


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
      link: '/editStudent/',
      },
      {
      text: 'Delete', 
      icon: faTrash, 
      link: '/deleteStudent/',
      },
      ]

    
    state = {
        tableData:[],
        isLoaded:false,
        filtered:[],
        noResult:false,
        searchBy:'name',
        selectedTab: 'studentInfo'
    }
    statehandler=(states)=>{
        this.setState(states)
        console.log(this.state)
      }
      componentDidMount = ()=>
      {
        const query = 
        `
        query
        {
          students{
            id
            name
            class
            email
          }
        }
        `
      const url = "http://localhost:4000/graphql";
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      }
      fetch(url, opts)
    .then(res => res.json())
    .then (
        ({data})=>
        {
            this.setState({
                tableData:data.students
            })
        }
    )
    .catch(console.error);
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