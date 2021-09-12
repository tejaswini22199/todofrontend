import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'

const Filter = ({setTasks}) => {
    const baseURL='http://localhost:8080/api/tasks/4';
    useEffect(() => {
       
        axios.get(baseURL+'?priority=NULL&category=NULL')
        .then(response=>{
           
            console.log(response.data);
            setTasks(response.data);
        })
    }, [])
    const handleCat=(e)=>{
        console.log(e);
        axios.get(baseURL+'?category=PERSONAL&priority=NULL')
        .then(response=>{
           setTasks(response.data);
        })
    }
    const handlePr=(e)=>{
        console.log(e);
        axios.get(baseURL+'?category=NULL&priority=LOW')
        .then(response=>{
            setTasks(response.data);
        })
    }
    const handleCompleteTasks=()=>{
        axios.get(baseURL+'/complete')
        .then(response=>{
            setTasks(response.data);
        })
    }
    const handleInCompleteTasks=()=>{
        
        axios.get(baseURL+"/incomplete")
        .then(response=>{
           setTasks(response.data);
        })
    }
    return (
        <div>
             
                  
              <label>
                    Priority:
                    <select value="LOW" onChange={(e)=>{handlePr(e)}}>
                        <option value="LOW"> LOW </option>
                        <option value="MEDIUM"> MEDIUM </option>
                        <option value="HIGH">  HIGH </option>
                    </select>
                </label>
         
         
            <label>
                    Category:
                    <select value="PERSONAL" onChange={(e)=>{handleCat(e)}}>
                        <option value="WORK"> WORK </option>
                        <option value="PERSONAL"> PERSONAL </option>
                        <option value="CODING"> CODING </option>
                        <option value="DESIGN"> DESIGN </option>
                        <option value="DAILY"> DAILY </option>
                        <option value="ENTERTAINMENT"> ENTERTAINMENT </option>
                        <option value="STUDY"> STUDY </option>
                    </select>
                </label>
               
            <button onClick={handleCompleteTasks}>
                Complete
            </button>
            <button onClick={handleInCompleteTasks}>
                InComplete
            </button>
            
        </div>
    )
}

export default Filter
