import style from './style.module.css';
import { NavLink } from 'react-router-dom'
import LogoBlackIcon from './logo-black.jpg';
import LogoWhiteIcon from './logo-white.jpeg';

import DayModeIcon from '../../assets/day_mode.svg'
import NightModeIcon from '../../assets/night_mode.svg'

const Header = ({ darkMode, onToggleTheme }) => {
    return (
        <header className={`${style.header} ${darkMode ? style.header_dark : ''}`}>
            <a href='https://github.com/zaikinale' className={style.logo}>
                <img
                    className={style.logo__img}
                    src={darkMode ? LogoBlackIcon : LogoWhiteIcon }
                    alt="A&S"
                />
                <h2 className={style.logo__title}>A&S</h2>
            </a>
            <nav className={style.navigation}>
                <ul className={style.navigation__list}>
                    <li>
                        <NavLink
                            to={'/'}
                            className={style.navigation__link}
                        >
                            {'Заметки'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/calendar'}
                            className={style.navigation__link}
                        >
                            {'Календарь'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/tables'}
                            className={style.navigation__link}
                        >
                            {'Таблицы'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/analitic'}
                            className={style.navigation__link}
                        >
                            {'Аналитика'}
                        </NavLink>
                    </li>
                    {/*<li><a className={style.navigation__link} href="">Заметки</a></li>*/}
                    {/*<li><a className={style.navigation__link} href="">Календарь</a></li>*/}
                    {/*<li><a className={style.navigation__link} href="">Таблицы</a></li>*/}
                    {/*<li><a className={style.navigation__link} href="">Аналитика</a></li>*/}
                </ul>
            </nav>
            <button
                onClick={onToggleTheme}
                className={style.theme_btn}
            >
                <img className={style.theme__img} src={darkMode ? DayModeIcon : NightModeIcon} alt={darkMode ? 'Cветлая тема' : 'Темная тема'} />
            </button>
        </header>
    );
};

export default Header;