import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';




class header extends Component{
    constructor(props){
        super(props)
       
        
    }
    
    render(){
        return (
            <Container fixed>
                <Card  style = {{width:550, height:200, }}>
                <CardContent style={{textAlign:"left"}}>
                    <h3>{this.props.task}</h3>
                    <h4>{this.props.taskDescription}</h4>
                    <Button onClick={this.props.onUpdate}>Completed</Button>
                </CardContent>
                </Card>


                </Container>
                
            
        );
    }
}

export default header;