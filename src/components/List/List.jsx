import {useState} from 'react'
import style from './style.module.css'

const Item = ({ item, onRemove, onUpdate, onToggleComplete  }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(item.text)

    const renderData = () => {
        return <>
            <span>{item.text}</span>
            <button className={style.list__delete } onClick={() => onRemove(item.id)}>Удалить</button>
            <button className={style.list__completed } onClick={() => onToggleComplete(item.id)}>{ item.status === 'active' ? 'Выполнено' : 'Отменить'}</button>
        </>
    }

    const renderEditor = () => {
        return <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onUpdate(item.id, editText)
                    setIsEditing(false)
                }
            }}
        />
    }

    const modeSwitching = () => {
        if (isEditing) {
            onUpdate(item.id, editText)
        } else {
            setEditText(item.text)
        }
        setIsEditing(!isEditing)
    }

    let itemClass = style.list__item;
    if (item.status === 'completed') {
        itemClass += ` ${style['list__item--completed']}`;
    } else if (item.status === 'overdue') {
        itemClass += ` ${style['list__item--overdue']}`;
    }

    return(
        <li className={ itemClass } key={item.id}>
            {isEditing ? renderEditor() : renderData()}
            <button className={style.list__fix} onClick={modeSwitching}>
                {isEditing ? 'Сохранить' : 'Изменить'}
            </button>
            {/* <button onClick={() => onCompleted(item.id)}>{ item.status === 'active' ? 'Выполнено' : 'Отменить'}</button> */}
        </li>
    )
}

export default function List({ list, onRemove, onUpdate, onToggleComplete }) {
    return (
        <ul className={style.list}>
            {list.map((item) => (
                <Item key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate} onToggleComplete={onToggleComplete} />
            ))}
        </ul>
    )
}