import React from 'react'
import displayTasks from './displayTasks'
const Home = () => {
    return (
        <div>
            {/* <displayTasks/> */}
            <Link to="/addTask" className="btn btn-primary">
                Add
            </Link>
           
        </div>
    )
}

export default Home
