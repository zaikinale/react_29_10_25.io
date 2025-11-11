import { useState } from 'react';
import style from './style.module.css';

import AlterIcon from '../../assets/alter.svg'
import CheckIcon from '../../assets/check.svg'
import RemoveIcon from '../../assets/remove.svg'
import SaveIcon from '../../assets/save.svg'
import TrashIcon from '../../assets/trash.svg'

const Item = ({ item, onRemove, onUpdate, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
    const [editDeadline, setEditDeadline] = useState(item.deadline || '');
    const [editTags, setEditTags] = useState(item.tags?.join(' #') || '');

    const handleSave = () => {
        const tags = editTags
            .split('#')
            .map(tag => tag.trim())
            .filter(tag => tag);
        onUpdate(item.id, {
            text: editText.trim(),
            deadline: editDeadline || null,
            tags: tags
        });
        setIsEditing(false);
    };

    const handleEdit = () => {
        setEditText(item.text);
        setEditDeadline(item.deadline || '');
        setEditTags(item.tags?.join(' #') || '');
        setIsEditing(true);
    };

    const renderData = () => {
        const deadlineStr = item.deadline 
            ? `${new Date(item.deadline).toLocaleDateString('ru-RU')}` 
            : '';
        const tagsStr = item.tags?.length ? `#${item.tags.join(' #')}` : '';

        return (
            <>
                {(deadlineStr || tagsStr) && (
                    <div className={style.item__meta}>
                        {deadlineStr}  {tagsStr && ` ${tagsStr}`}
                    </div>
                )}
                <span>{item.text}</span>

                <div className={style.btnControl}>
                    <button className={style.list__delete} onClick={() => onRemove(item.id)}>
                        <img className={style.btnControlImg} src={TrashIcon} alt='Удалить' />
                        
                    </button>
                    <button className={style.list__completed} onClick={() => onToggleComplete(item.id)}>
                        <img className={style.btnControlImg} src={item.status === 'completed' ? RemoveIcon : CheckIcon } alt={item.status === 'completed' ? 'Отменить' : 'Выполнено'} />
                        
                    </button>
                    <button className={style.list__fix} onClick={handleEdit}>
                        <img className={style.btnControlImg} src={AlterIcon} alt='Изменить' />
                    </button>
                </div>
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
                placeholder="Теги (через #)"
                className={style.editor__input}
            />
            <div className={style.btnControl}>
                <button className={style.list__delete} onClick={() => onRemove(item.id)}>
                    <img className={style.btnControlImg} src={RemoveIcon} alt="Удалить" />
                </button>
                <button className={style.list__completed} onClick={() => onToggleComplete(item.id)}>
                    <img className={style.btnControlImg} src={item.status === 'completed' ? RemoveIcon : CheckIcon } alt={item.status === 'completed' ? 'Отменить' : 'Выполнено'} />
                </button>
                <button className={style.list__fix} onClick={handleSave}>
                    <img className={style.btnControlImg} src={SaveIcon} alt="Сохранить" />
                </button>
            </div>
        </>
    );

    let itemClass = style.list__item;
    if (item.status === 'completed') {
        itemClass += ` ${style['list__item--completed']}`;
    } else if (item.deadline && new Date(item.deadline) < new Date().setHours(0,0,0,0)) {
        itemClass += ` ${style['list__item--overdue']}`;
    }

    return (
        <li className={itemClass} key={item.id}>
            {isEditing ? renderEditor() : renderData()}
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