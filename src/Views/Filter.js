import axios from 'axios'
import React from 'react'
import {useEffect,useState} from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

const Filter = ({setTasks}) => {
    const [priority,setPriority] = useState("LOW");
    const [category,setCategory] = useState("PERSONAL");
   
    // console.log(label);
    const baseURL='http://localhost:8080/api/tasks/4';
    useEffect(() => {
       
        axios.get(baseURL+'?priority=NULL&category=NULL')
        .then(response=>{
           
            console.log(response.data);
            setTasks(response.data);
        })
    }, [setTasks])
    const handleCat=(e)=>{
        console.log(e);
        setCategory(e.target.value);
        axios.get(baseURL+`?category=${category}&priority=NULL`)
        .then(response=>{
           setTasks(response.data);
        })
    }
    const handlePr=(e)=>{
        console.log(e);
        setPriority(e.target.value);
        axios.get(baseURL+`?category=NULL&priority=${priority}`)
        .then(response=>{
            setTasks(response.data);
        })
    }
    const completedTasks=()=>{
      
        axios.get(baseURL+'/complete')
        .then(response=>{
            setTasks(response.data);
        })
    }
    const NotcompletedTasks=()=>{
      
        axios.get(baseURL+'/incomplete')
        .then(response=>{
            setTasks(response.data);
        })
    }
    const handleCompleteTasks=(e)=>{
        console.log(e.target.checked);
        if(e.target.checked){
         completedTasks();
        }
        else{
            NotcompletedTasks();
        }
    }
    return (
        <div>
           
                <FormControl sx={{margin:5}}>
                    <InputLabel id="demo-simple-select-label"> Priority </InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority}
                    label="Priority"
                    onChange={handlePr}
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
                    value={category}
                    label="Category"
                    onChange={handleCat}
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
          
           
             
              <Switch  defaultChecked   onClick={handleCompleteTasks} sx={{margin:5}}/> 
            {/* <button onClick={handleCompleteTasks}>
                Complete
            </button>
            <button onClick={handleInCompleteTasks}>
                InComplete
            </button> */}
            </div>
        
    )
}

export default Filter
