import React from 'react'
import {useState} from 'react'
import axios from 'axios'

import { FormControl ,Input, InputLabel,MenuItem ,Select} from '@mui/material'
import { Button, TextField } from '@material-ui/core'
const AddTask = () => {
    const [task,setTask]=useState({
        taskName:"",
        priority:"",
        category:"",
        isCompleted:0,
        user_id:4,
    });
    const handleSubmit=(event)=>{
        // console.log(event.target);
         console.log(task);
        event.preventDefault();
        const url="http://localhost:8080/api/tasks/";
        // const data=task;
        // console.log("data"+data);
        axios.post(url,task)
        .then(response=>{
            console.log(response);
            // setTask({...task,id:response.data.id});
        })
        console.log(event.target.value);
    }
    return (
        <div>
            <FormControl onSubmit={handleSubmit}>
                 <TextField label="taskname" id="outlined-basic" variant="outlined" value={task.taskName} onChange={e=>setTask({...task,taskName: e.target.value})}/>
                <FormControl sx={{margin:5}}>
                    <InputLabel id="demo-simple-select-label"> Priority </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={task.priority}
                    label="Priority"
                    onChange={e=>setTask({...task,priority: e.target.value})}
                    >
                    <MenuItem value="LOW"> LOW </MenuItem>
                    <MenuItem value="MEDIUM"> MEDIUM </MenuItem>
                    <MenuItem value="HIGH"> HIGH </MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{margin:5}} >
                    <InputLabel id="demo-simple-select-label"> Category </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={task.category}
                    label="Category"
                    onChange={e=>setTask({...task,category: e.target.value})}
                    >
                        <MenuItem value="WORK"> WORK </MenuItem>
                        <MenuItem value="PERSONAL"> PERSONAL </MenuItem>
                        <MenuItem value="CODING"> CODING </MenuItem>
                        <MenuItem value="DESIGN"> DESIGN </MenuItem>
                        <MenuItem value="DAILY"> DAILY </MenuItem>
                        <MenuItem value="ENTERTAINMENT"> ENTERTAINMENT </MenuItem>
                        <MenuItem value="STUDY"> STUDY </MenuItem>
                    </Select>
                </FormControl>
          
                <Button value="Submit" variant="contained" />
            </FormControl>
        </div>
    )
}

export default AddTask
