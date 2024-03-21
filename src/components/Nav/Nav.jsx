import css from './Nav.module.css';

export const Nav = () => {
    return (   
        <nav className={css.headerNav} >
                <ul className={`${css.navList} list`}>
                    <li><a className={`${css.linkNav} ${css.current} link`} href="./portfolio.html">Portfolio</a></li>
                    <li><a className={`${css.linkNav} link`} href="./index.html">Studio</a></li>
                    <li><a className={`${css.linkNav} link`} href="./index.html">Contacts</a></li>
                </ul>     
        </nav>
    ) 
};