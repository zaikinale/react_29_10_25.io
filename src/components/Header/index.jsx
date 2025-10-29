import style from './style.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img className={style.logo__img} src="./logo-black-on-black-1.jpg" alt="Logotype" />
                <h2 className={style.logo__title}>Logotype</h2>
            </div>
            <nav className={style.navigation}>
                <ul className={style.navigation}>
                    <li><a className={style.navigation__link} href="">О нас</a></li>
                    <li><a className={style.navigation__link} href="">О вас</a></li>
                    <li><a className={style.navigation__link} href="">Кавказ</a></li>
                    <li><a className={style.navigation__link} href="">За нас</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;