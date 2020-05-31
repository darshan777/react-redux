import React,  { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { Button } from "@material-ui/core";
import Header from "../header-component/header"




class table extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks :[
                {
                    TaskID:1,
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                },
                {
                    TaskID:2,
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                },
                {
                    TaskID:3,
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                }
            ]
        }
       
    }
    handleDelete = function(event){
        
    }
    handelUpdate = (task) =>{
        
        this.setState(()=>{
            tasks : this.state.tasks.splice(task.TaskID,1);
        });
        console.log(this.state.tasks.length);
        }
    

    

    render(){
        return (
            <div> 
                
                        
                            {
                                
                                this.state.tasks.map((task)=>{
                                return (
                                    <div>
                                    <Header task ={task.Task} taskDescription={task.Description} onUpdate={()=>this.handelUpdate(task)} onDelete={this.handleDelete}/>
                                    <br />
                                    </div>
                                   
                                );
                                })
                                
                            }
                        
                    
            </div>
        );
    }
}

export default table