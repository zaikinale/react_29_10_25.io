import style from './style.module.css'

export default function CalendarAuxiliaty ({mode}) {
    if(mode === 'week') {
        return (
            <section className={style.auciliatyContainer}>
                <div className={style.paperMonth}>

                </div>

                <div className={style.timeStapsContainer}>
                    <div className={style.timeStap}>
                        00:00
                    </div>
                    <div className={style.timeStap}>
                        01:00
                    </div>
                    <div className={style.timeStap}>
                        02:00
                    </div>
                    <div className={style.timeStap}>
                        03:00
                    </div>
                    <div className={style.timeStap}>
                        04:00
                    </div>
                    <div className={style.timeStap}>
                        05:00
                    </div>
                    <div className={style.timeStap}>
                        06:00
                    </div>
                    <div className={style.timeStap}>
                        07:00
                    </div>
                    <div className={style.timeStap}>
                        08:00
                    </div>
                    <div className={style.timeStap}>
                        09:00
                    </div>
                    <div className={style.timeStap}>
                        10:00
                    </div>
                    <div className={style.timeStap}>
                        11:00
                    </div>
                    <div className={style.timeStap}>
                        12:00
                    </div>
                    <div className={style.timeStap}>
                        13:00
                    </div>
                    <div className={style.timeStap}>
                        14:00
                    </div>
                    <div className={style.timeStap}>
                        15:00
                    </div>
                    <div className={style.timeStap}>
                        16:00
                    </div>
                    <div className={style.timeStap}>
                        17:00
                    </div>
                    <div className={style.timeStap}>
                        18:00
                    </div>
                    <div className={style.timeStap}>
                        19:00
                    </div>
                    <div className={style.timeStap}>
                        20:00
                    </div>
                    <div className={style.timeStap}>
                        21:00
                    </div>
                    <div className={style.timeStap}>
                        22:00
                    </div>
                    <div className={style.timeStap}>
                        23:00
                    </div>
                </div>
            </section>
        )
    }
}
