import { useState } from 'react';
import style from './style.module.css';

export default function TaskAddForm({ onAdd }) {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [error, setError] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!text.trim()) {
            setError('Введите текст задачи');
            return;
        }

        if (deadline && deadline < today) {
            setError('Дедлайн не может быть установлен на прошедшую дату');
            return;
        }

        const tags = tagsInput
            .split('#')
            .map(tag => tag.trim())
            .filter(tag => tag !== '');

        onAdd(text, deadline || null, tags);

        setText('');
        setDeadline('');
        setTagsInput('');
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {error && <div className={style.form__error}>{error}</div>}

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
                min={today}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <input
                type="text"
                className={style.form__input}
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder='Теги через #'
            />
            <button type="submit" className={style.form__button}>
                Добавить
            </button>
        </form>
    );
}