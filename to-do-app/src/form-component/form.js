import React, {Component} from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField,
    Radio,
    RadioGroup, FormLabel, FormControlLabel
  } from "@material-ui/core";
  import {
    KeyboardDatePicker
  } from '@material-ui/pickers';





class form extends Component{
    render(){
        
        let value = 'low';
        let setValue = (val)=>{
            value = val;
        }
        

            const handleChange = (event) => {
                setValue(event.target.value);
                console.log(value)
            };

        return (
            <div style={{alignContent:"center", display:"flex", padding:20}}>
                <form>
                    <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input id="description" type="textarea" />
                    </FormControl>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Priority</FormLabel>
                    <RadioGroup aria-label="gender" name="priority" value={value} onChange={handleChange}>
                        <FormControlLabel value="high" control={<Radio />} label="High" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="low" control={<Radio />} label="low" />
                        
                    </RadioGroup>
                    </FormControl>
                    
                            
                        
                </form>
            </div>
        );

    }
}

export default form;
