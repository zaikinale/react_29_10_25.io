import style from './style.module.css';
import TaskAddForm from "../TaskAddFrom/TaskAddFrom.jsx";
import { useState } from 'react';
import useTaskStore from "../../store/useTasksStore.js";
import RemoveIcon from '../../assets/remove.svg'

export default function AddBlock() {
    const tasks = useTaskStore(state => state.tasks);
    const addTask = useTaskStore(state => state.addTask);

    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleForm = () => {
        setIsFormVisible(prev => !prev);
    };

    return (
        <div className={style.addContainer}>
            {isFormVisible && <TaskAddForm onAdd={addTask} />}

            <button
                className={style.addBtn}
                onClick={toggleForm}
            >
                {/*{isFormVisible ? (<img className={style.imgClose} src={RemoveIcon} alt="отмена"/>) : '+'}*/}
                {isFormVisible ? '✕' : '+'}
            </button>
        </div>
    );
}