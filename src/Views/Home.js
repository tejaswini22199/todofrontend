import React,{useState} from 'react'

import DisplayTasks from './DisplayTasks'
import Filter from './Filter'


import { Button,Paper } from '@mui/material';


const Home = () => {
    const [tasks,setTasks]=useState([]);
    return (
        
        <div style={{margin:100, marginTop:20,display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Filter setTasks={setTasks}/>
            <Paper elevation={3} >
             <DisplayTasks tasks={tasks}/>
             </Paper>
                <Button href="/addTask" variant="contained" disableElevation>
                     Add
                </Button>
        </div>
   
   )
}

export default Home
