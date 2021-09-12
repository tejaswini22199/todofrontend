import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
const AddTask = () => {
    const [task,setTask]=useState({
        id:"",
        taskName:"",
        priority:"",
        category:"",
        isChecked:false,
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        const url="http://localhost:8080/tasks/";
        const data=event.target.value;
        axios.post(url,data)
        .then(response=>{
            setTask({...task,id:response.data.id});
        })
        console.log(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    TaskName:
                    <input type="text" value={task.taskName} onChange={e=>setTask({...task,taskName: e.target.value})}/>
                </label>
                    
                <label>
                    Priority:
                    <select value={task.priority} onChange={e=>setTask({...task,priority: e.target.value})}>
                        <option value="LOW"> LOW </option>
                        <option value="MEDIUM"> MEDIUM </option>
                        <option value="HIGH">  HIGH </option>
                    </select>
                </label>
                <label>
                    Category:
                    <select value={task.category} onChange={e=>setTask({...task,category: e.target.value})}>
                        <option value="WORK"> Work </option>
                        <option value="PERSONAL"> Personal </option>
                        <option value="CODING"> Coding</option>
                        <option value="DESIGN"> Design </option>
                        <option value="DAILY"> Daily </option>
                        <option value="ENTERTAINMENT"> Entertainment </option>
                        <option value="STUDY"> Study </option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddTask
