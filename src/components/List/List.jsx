import style from './style.module.css'

export default function List({list, onRemove}) {
    return <ul className={style.list}>
        {list.map((item) => <li className={style.list__item} key={item.id}>{item.text}<button className={style.list_delete} onClick={() => onRemove(item.id)}>Удалить</button></li>)} 
    </ul>
}