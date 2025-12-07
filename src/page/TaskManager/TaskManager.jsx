import List from '../../components/List/List.jsx';
import TaskAddFrom from '../../components/TaskAddFrom/TaskAddFrom.jsx';
import style from './style.module.css';
import RemoveIcon from '../../assets/remove.svg';
import { useState }  from 'react'

import useTaskStore from '../../store/useTasksStore.js';

export default function TaskManager() {
    const tasks = useTaskStore(state => state.tasks);
    // const addTask = useTaskStore(state => state.addTask);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

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
    //
    // const handleAddTask = (text, deadline, tags) => {
    //     addTask(text, deadline, tags);
    // };

    return (
        <div className={style.section}>
            {/*<TaskAddFrom onAdd={handleAddTask} />*/}

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
                        <img className={style.searchDelete} src={RemoveIcon} alt="Удалить" />
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
                onRemove={useTaskStore(state => state.removeTask)}
                onUpdate={useTaskStore(state => state.updateTask)}
                onToggleComplete={useTaskStore(state => state.toggleComplete)}
            />
        </div>
    );
}