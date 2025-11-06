import { useState } from 'react';
import style from './style.module.css';

export default function TaskAddFrom({ onAdd }) {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tagsInput, setTagsInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const tags = tagsInput
                .split(',')
                .map(tag => tag.trim())
                .filter(tag => tag !== '');
            onAdd(text, deadline || null, tags);
            setText('');
            setDeadline('');
            setTagsInput('');
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
                required
            />
            <input
                type="date"
                className={style.form__input}
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <input
                type="text"
                className={style.form__input}
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder='Теги через ","'
            />
            <button type="submit" className={style.form__button}>
                Добавить
            </button>
        </form>
    );
}