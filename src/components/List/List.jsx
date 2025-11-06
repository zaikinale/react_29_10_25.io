import { useState } from 'react';
import style from './style.module.css';

const Item = ({ item, onRemove, onUpdate, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
    const [editDeadline, setEditDeadline] = useState(item.deadline || '');
    const [editTags, setEditTags] = useState(item.tags?.join(', ') || '');

    const renderData = () => {
        const deadlineStr = item.deadline 
            ? `Дедлайн: ${new Date(item.deadline).toLocaleDateString('ru-RU')}` 
            : '';
        const tagsStr = item.tags?.length ? `Теги: ${item.tags.join(', ')}` : '';
    
        return (
            <>
                <span>{item.text}</span>
                {(deadlineStr || tagsStr) && (
                    <div className={style.item__meta}>
                        {deadlineStr} {tagsStr && ` ${tagsStr}`}
                    </div>
                )}
                <button className={style.list__delete} onClick={() => onRemove(item.id)}>
                    Удалить
                </button>
                <button className={style.list__completed} onClick={() => onToggleComplete(item.id)}>
                    {item.status === 'completed' ? 'Отменить' : 'Выполнено'}
                </button>
            </>
        );
    };

    const renderEditor = () => (
        <>
            <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className={style.editor__input}
            />
            <input
                type="date"
                value={editDeadline}
                onChange={(e) => setEditDeadline(e.target.value)}
                className={style.editor__input}
            />
            <input
                type="text"
                value={editTags}
                onChange={(e) => setEditTags(e.target.value)}
                placeholder="Теги (через запятую)"
                className={style.editor__input}
            />
        </>
    );

    const modeSwitching = () => {
        if (isEditing) {
            const tags = editTags
                .split(',')
                .map(tag => tag.trim())
                .filter(tag => tag);
            onUpdate(item.id, {
                text: editText.trim(),
                deadline: editDeadline || null,
                tags: tags
            });
        } else {
            setEditText(item.text);
            setEditDeadline(item.deadline || '');
            setEditTags(item.tags?.join(', ') || '');
        }
        setIsEditing(!isEditing);
    };

    let itemClass = style.list__item;
    if (item.status === 'completed') {
        itemClass += ` ${style['list__item--completed']}`;
    } else if (item.deadline && new Date(item.deadline) < new Date().setHours(0,0,0,0)) {
        itemClass += ` ${style['list__item--overdue']}`;
    }

    return (
        <li className={itemClass} key={item.id}>
            {isEditing ? renderEditor() : renderData()}
            <button className={style.list__fix} onClick={modeSwitching}>
                {isEditing ? 'Сохранить' : 'Изменить'}
            </button>
        </li>
    );
};

export default function List({ list, onRemove, onUpdate, onToggleComplete }) {
    return (
        <ul className={style.list}>
            {list.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    );
}