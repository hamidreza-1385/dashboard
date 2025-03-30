import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TaskForm from '../components/VazayefV/TaskForm';
import TaskList from '../components/VazayefV/TaskList';
import { useState } from 'react';
const ListVazayef = () => {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (text) => {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };
  
    const toggleTask = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    return (
        <div className="dashboard-container ml">
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className='bg-white rounded-4 p-4 justify-content-end'>
                list vazayef
            </div>
        </div>
    </div>
    );
  };
  
  export default ListVazayef;