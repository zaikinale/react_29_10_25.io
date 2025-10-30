import { useState } from 'react';
import style from './style.module.css'

export default function Clicker () {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(1)

    const handleClick = (typeOfOperation) => () => {
        if (typeOfOperation === 'add') {
            setCount(count + +value)
        }else {
            setCount(count- +value)
        }
    }

    const handleInput = (e) => {
        // console.log(e)
        setValue(e.target.value)
    }


    return <div className="style.counter">
        <h3 className={style.counter__title}>{count}</h3>
        <input type="number" value={value} onChange={handleInput} />
        <button onClick={handleClick('add')} className={style.counter__add}>count +</button>
        <button onClick={handleClick('reduce')} className={style.counter__reduce}>count -</button>
    </div>
}
