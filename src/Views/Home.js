import React from 'react'
import DisplayTasks from './DisplayTasks'
import Filter from './Filter'
import {useState} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    const [tasks,setTasks]=useState([]);
    return (
        
        <div>
            <Filter setTasks={setTasks}/>
             <DisplayTasks tasks={tasks}/>
            <Link to="/addTask" className="btn btn-primary">
                Add
            </Link>
            
           
        </div>
    )
}

export default Home
