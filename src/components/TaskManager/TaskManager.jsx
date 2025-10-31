import { useState } from "react";
import List from '../List/List.jsx';
import TaskAddFrom from '../TaskAddFrom/TaskAddFrom.jsx';
import style from './style.module.css';


export default function TaskManager () {
    const [tasks, setTasks] = useState([{id: 1, text: 'Damir loh', status: 'active' }])

    const addTask = (text) => {
        const newId = tasks.length + 1;
        setTasks(prev => [...prev, { id: newId, text, status: 'active' }]);
    };

    const removeTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const updateTask = (id, newText) => {
        setTasks(prev => prev.map(task => 
            task.id === id ? { ...task, text: newText } : task
        ));
    };

    const toggleComplete = (id) => {
        setTasks(prev => 
            prev.map(task => {
                if (task.id !== id) return task;
                // Если была 'completed' → 'active', иначе → 'completed'
                return {
                    ...task,
                    status: task.status === 'completed' ? 'active' : 'completed'
                };
            })
        );
    };

    return <div className={style.section}>
        <h2 className={style.section__title}>Task Manager</h2>
        <TaskAddFrom onAdd={addTask}></TaskAddFrom>
        <List list={tasks} onRemove={removeTask} onUpdate={updateTask} onToggleComplete={toggleComplete}></List>
    </div>

}  