import Home from './Views/Home.js'
import './App.css';
import { Route,Switch } from 'react-router';
 import AddTask from './Views/AddTask.js';
// import AddUser from './Views/AddUser.js';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/addTask" component={AddTask}></Route> 
    
    </Switch>
   
  
   
  );
}

export default App;
