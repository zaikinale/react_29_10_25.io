import style from './style.module.css';
import SearchIcon from '../../assets/media/icons/search.svg'
import {useType} from "../../context/useContextCalendar.jsx";

export default function CalendarHeader () {
    const { typeQuery, setTypeQuery }= useType();

    const handleChange = (e) => {
        setTypeQuery(e.target.value);
    };

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
                <button className={style.searchBtn}>
                    <img src={SearchIcon} alt="Поиск"/>
                </button>
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