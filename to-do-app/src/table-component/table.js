import React,  { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { Button } from "@material-ui/core";




class table extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks :[
                {
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                },
                {
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                },
                {
                    Task: "Complete React App",
                    Description:"Complete the React Applicatiion  and get a brief understanding of its features"
                }
            ]
        }
    }
    deleteTask = function(event){
        let name = event.target.id.value
        console.log(name);
    }

    

    render(){
        return (
            <div> 
                <TableContainer>
                    <TableHead>
                        <TableRow>
                        
                            <TableCell>Task ID</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            {
                                
                                this.state.tasks.map((task)=>{
                                return (
                                <TableRow>
                                <TableCell>{task.Task}</TableCell>
                                <TableCell>{task.Description}</TableCell>
                                <TableCell><Button variant="contained" color="primary" id={task.Task} onClick={this.deleteTask}> Delete </Button></TableCell>
                                
                                </TableRow>
                                );
                                })
                                
                            }
                        
                    </TableBody>
                </TableContainer>
            </div>
        );
    }
}

export default table