import { Nav } from 'components/Nav/Nav';
import { AddressHeader } from '../AddressHeader/AddressHeader';
import css from './PageTitle.module.css';
export const PageTitle = () => {
    return (   
        <header className={css.headerLine}>
        <div className={css.headerContainer}>
            <a className={css.logoLink} href="/index.html">Web<span className={css.logoHeader}>Studio</span></a>
            <button className={css.menuToggle} aria-expanded="false" aria-controls="mobile-menu">
                <svg className={css.burger} width="40" height="40">
                    <use href="./images/icons.svg#menu_40px"></use>
                </svg>
            </button>            
            <Nav/>
            <AddressHeader/>
        </div>
    </header>
    ) 
};