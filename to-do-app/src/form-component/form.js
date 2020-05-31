import React, {Component} from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    
  } from "@material-ui/core";
  import Header from '../header-component/header'

  





class form extends Component{
    constructor(props){
        super(props);
        this.state = {
            Task: "Enter your Rask",
            Description:" Descripe your task"

        }
    }
    handleChange = (event)=>{
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
           [key] : value,

        });
        
    }
    handleSubmit = (event)=>{
        
    }

    
    render(){
        
       

        return (
            <div style={{alignContent:"center", display:"flex", padding:20}}>
                <form >
                    <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="description" >Task</InputLabel>
                    <Input name="Task" type="text" onChange={this.handleChange} />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input name="Description" type="textarea"  onChange={this.handleChange}/>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit} >
                         Submit
                    </Button>
                </form>
            </div>
        );

    }
}

export default form;
