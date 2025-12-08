import style from './style.module.css'
import CalendarHeader from "../../components/CalendarHeader/index.jsx";
import CalendarContainer from '../../components/CalendarContainer/index.jsx'
import CalendarAuxiliaty from "../../components/CalendarAuxiliary/index.jsx";

export default function Calendar () {
        return (
                <div className={style.content}>
                    <CalendarAuxiliaty></CalendarAuxiliaty>
                    <div className={style.mainContent}>
                        <CalendarHeader></CalendarHeader>
                        <CalendarContainer></CalendarContainer>
                    </div>
                </div>
        )
}