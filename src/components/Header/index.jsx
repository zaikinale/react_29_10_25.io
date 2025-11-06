import style from './style.module.css';
import LogoBlackIcon from './logo-black.jpg';
import LogoWhiteIcon from './logo-white.jpeg';

const Header = ({ darkMode, onToggleTheme }) => {
    return (
        <header className={`${style.header} ${darkMode ? style.header_dark : ''}`}>
            <div className={style.logo}>
                <img
                    className={style.logo__img}
                    src={darkMode ? LogoBlackIcon : LogoWhiteIcon }
                    alt="Logotype"
                />
                <h2 className={style.logo__title}>Logotype</h2>
            </div>
            <nav className={style.navigation}>
                <ul className={style.navigation__list}>
                    <li><a className={style.navigation__link} href="">О нас</a></li>
                    <li><a className={style.navigation__link} href="">О вас</a></li>
                    <li><a className={style.navigation__link} href="">Кавказ</a></li>
                    <li><a className={style.navigation__link} href="">За нас</a></li>
                </ul>
            </nav>
            <button
                onClick={onToggleTheme}
                className={style.theme_btn}
            >
                {darkMode ? 'День' : 'Ночь'}
            </button>
        </header>
    );
};

export default Header;