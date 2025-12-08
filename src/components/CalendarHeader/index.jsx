import style from './style.module.css';
import SearchIcon from '../../assets/media/icons/search.svg'
import {useType} from "../../context/useContextCalendar.jsx";
import {useState} from "react";

export default function CalendarHeader () {
    const { typeQuery, setTypeQuery }= useType();
    const [ isSearch, setIsSearch ] = useState(false)

    const handleChange = (e) => {
        setTypeQuery(e.target.value);
    };

    function handleSearch () {
        setIsSearch(state => !state)
    }

    return (
        <section className={style.headerContainer}>
            <div className={style.monthAndToday}>
                <div className={style.control}>
                    <button className={style.backBtn}>❮</button>
                    <button className={style.nextBtn}>❯</button>
                </div>
                <button className={style.onToday}>Сегодня</button>
                <h2 className={style.thisMonth}>Декабрь</h2>
            </div>
            <div className={style.searchAndSelect}>
                <button className={style.searchBtn} onClick={handleSearch}>
                    <img src={SearchIcon} alt="Поиск"/>
                </button>
                {isSearch && <input className={style.searchInput} type={"search"} placeholder={'Найти задачу'} /> }
                <select name="select" className={style.selectDate} onChange={handleChange}>
                    <option value="day">День</option>
                    <option value="week" selected >Неделя</option>
                    <option value="month">Месяц</option>
                    <option value="year">Год</option>
                </select>
            </div>
        </section>
    )
}