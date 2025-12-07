import style from './style.module.css';

export default function CalendarHeader () {
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
                    <img src="" alt="Поиск"/>
                </button>
                <select name="select" className={style.selectDate}>
                    <option value="day" selected>День</option>
                    <option value="week">Неделя</option>
                    <option value="month">Месяц</option>
                    <option value="year">Год</option>
                </select>
            </div>
        </section>
    )
}