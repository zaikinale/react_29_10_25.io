import { useState, useEffect } from "react";
import List from '../List/List.jsx';
import TaskAddFrom from '../TaskAddFrom/TaskAddFrom.jsx';
import style from './style.module.css';
import RemoveIcon from '../../assets/remove.svg'

export default function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    let displayedTasks;
    if (selectedTag) {
        displayedTasks = tasks.filter(task =>
            task.tags && task.tags.includes(selectedTag)
        );
    } else {
        displayedTasks = tasks.filter(task =>
            task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (task.tags && task.tags.some(tag =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        );
    }

    const searchResultTags = !selectedTag
        ? [...new Set(
            tasks
                .filter(task =>
                    task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (task.tags && task.tags.some(tag =>
                        tag.toLowerCase().includes(searchQuery.toLowerCase())
                    ))
                )
                .flatMap(task => task.tags || [])
                .filter(tag => tag.trim() !== '')
          )]
        : [];

    const addTask = (text, deadline, tags) => {
        const newId = tasks.length + 1;
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
            <TaskAddFrom onAdd={addTask} />
            <input
                type="text"
                placeholder="Поиск по названию/тегу..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedTag(null);
                }}
                className={style.search}
            /> 

            {selectedTag && (
                <div className={style.activeTag}>
                    <button
                        className={`${style.tagButton} ${style.tagButtonActive}`}
                        onClick={() => setSelectedTag(null)}
                    >
                        #{selectedTag}
                        <img className={style.searchDelete} src={RemoveIcon} alt='Удалить' />
                    </button>
                </div>
            )}

            {searchResultTags.length > 0 && !selectedTag && (
                <div className={style.tagSuggestions}>
                    {searchResultTags.map(tag => (
                        <button
                            key={tag}
                            className={style.tagButton}
                            onClick={() => {
                                setSelectedTag(tag);
                                setSearchQuery('');
                            }}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            )}

            <List
                list={displayedTasks}
                onRemove={removeTask}
                onUpdate={updateTask}
                onToggleComplete={toggleComplete}
            />
        </div>
    );
}