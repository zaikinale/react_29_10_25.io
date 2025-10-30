// TaskAddFrom.jsx
import { useState } from 'react';
import style from './style.module.css';

export default function TaskAddFrom({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <h3 className={style.form__title}>Добавь задачу</h3>
            <input
                type="text"
                className={style.form__input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Новая задача..."
            />
            <button type="submit" className={style.form__button}>
                Добавить
            </button>
        </form>
    );
}