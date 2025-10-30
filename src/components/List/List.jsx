import {useState} from 'react'
import style from './style.module.css'

const Item = ({ item, onRemove, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(item.text)

    const renderData = () => {
        return <>
            <span>{item.text}</span>
            <button className={style.list_delete} onClick={() => onRemove(item.id)}>Удалить</button>
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

    return(
        <li className={style.list__item} key={item.id}>
            {isEditing ? renderEditor() : renderData()}
            <button className={style.list__fix} onClick={modeSwitching}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}

export default function List({ list, onRemove, onUpdate }) {
    return (
        <ul className={style.list}>
            {list.map((item) => (
                <Item key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate} />
            ))}
        </ul>
    )
}