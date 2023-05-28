import {Component} from "react"
import {Box, Typography,Button} from "@mui/material"

import "./Counter.css"

interface IProps{

}

interface IState{
    timer:number,
    isRunning:boolean,
    isReset : boolean
    
}

// interface 

let setIntervalId: any = "clear
class Counter extends Component<IProps,IState>{

    state:IState={
        timer : 0,
        isRunning : false,
        isReset : false
       
    }

    startTimer=()=>{
        setIntervalId= setInterval(()=>{
            this.setState(p=>({timer: p.timer + 1,isRunning : true,isReset:true}))
        },1000)
    }

    stopTimer=()=>{
        clearInterval(setIntervalId)
        this.setState({isRunning:false})
    }

    resetTimer=()=>{
        // if(!this.state.isRunning){
        //     this.setState({timer:0,isRunning:false})
        // }
        this.setState({timer:0,isRunning:false,isReset:false},this.stopTimer)
    }

    render(){
        console.log(setIntervalId)
        return ( 
            <Box className="react-app">
                <Box className="timer-app">
                <Typography variant="h1">{this.state.timer}</Typography>
                <Box className="buttons-container">
                    <Button variant="contained" sx={{bgcolor:"green"}} onClick={this.startTimer} disabled={this.state.isRunning ? true : false} className="start-button">Start</Button>
                    <Button variant="contained" sx={{bgcolor:"red",margin:"10px 0px"}} disabled={this.state.isRunning ? false : true} onClick={this.stopTimer} className="stop-button">Stop</Button>
                    <Button variant="contained" sx={{bgcolor:"orange"}} disabled={this.state.isReset ? false : true} className="reset-button" onClick={this.resetTimer}>Reset</Button>
                </Box>
                </Box>
            </Box>
          )

    }
  
}

export default Counter