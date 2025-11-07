import { useState, useEffect } from "react"; // 🔥 добавлен useEffect
import List from '../List/List.jsx';
import TaskAddFrom from '../TaskAddFrom/TaskAddFrom.jsx';
import style from './style.module.css';

export default function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved 
            ? JSON.parse(saved) 
            : [];
    });

    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (task.tags && task.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    ); 

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text, deadline, tags) => {
        const newId = tasks.length + 1 
        setTasks(prev => [...prev, {
            id: newId,
            text: text.trim(),
            status: 'active',
            deadline: deadline || null,
            tags: tags || []
        }]);
    };

    const removeTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const updateTask = (id, updates) => {
        setTasks(prev =>
            prev.map(task => task.id === id ? { ...task, ...updates } : task)
        );
    };

    const toggleComplete = (id) => {
        setTasks(prev =>
            prev.map(task => {
                if (task.id !== id) return task;
                return {
                    ...task,
                    status: task.status === 'completed' ? 'active' : 'completed'
                };
            })
        );
    };

    return (
        <div className={style.section}>
            {/* <h2 className={style.section__title}>Task Manager</h2> */}
            <TaskAddFrom onAdd={addTask}></TaskAddFrom>
            <input type="text" placeholder="Поиск по названию/#..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={style.search}></input>
            <List list={filteredTasks} onRemove={removeTask} onUpdate={updateTask} onToggleComplete={toggleComplete}></List>
        </div>
    );
}