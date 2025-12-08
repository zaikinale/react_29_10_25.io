import style from './style.module.css';
import {useType} from "../../context/useContextCalendar.jsx";

const weekData = [
    { abbr: 'ПН', date: 1 },
    { abbr: 'ВТ', date: 2 },
    { abbr: 'СР', date: 3 },
    { abbr: 'ЧТ', date: 4 },
    { abbr: 'ПТ', date: 5 },
    { abbr: 'СБ', date: 6 },
    { abbr: 'ВС', date: 7 }
];

export default function CalendarContainer() {
    const { typeQuery }= useType();

    if(typeQuery === 'week') {
        return (
            <section className={style.datasContainerWeek}>
                <div className={style.containerHeader}>
                    {weekData.map((day, index) => (
                        <div key={index} className={style.weekItem}>
                            <h3 className={style.weekItemTitle}>{day.abbr}</h3>
                            <p className={style.weekItemDate}>{day.date}</p>
                        </div>
                    ))}
                </div>
                <div className={style.containerWeek}>
                    {weekData.map((_, index) => (
                        <div key={index} className={style.columnDay}>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                            <button className={style.hourBlock}></button>
                        </div>
                    ))}
                </div>
            </section>
        );
    };
}