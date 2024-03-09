import css from './Nav.module.css';
export const Nav = () => {
    return (   
            <nav className={css.headerNav}>
                <ul className={css.navList}>
                    <li><a className={css.linkNav} href="./index.html">Studio</a></li>
                    <li><a className={css.linkNav} href="./portfolio.html">Portfolio</a></li>
                    <li><a className={css.linkNav} href="#">Contacts</a></li>
                </ul>
            </nav>
    ) 
};