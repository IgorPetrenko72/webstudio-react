import { Nav } from '../Nav/Nav';
import { AddressHeader } from '../AddressHeader/AddressHeader';
import { Logo } from '../Logo/Logo';
import css from './PageTitle.module.css';

export const PageTitle = () => {
    return (   
    <header className={css.headerLine}>
        <div className={`${css.headerContainer} container`}>
            <Logo/>       
            <Nav/>
            <AddressHeader/>
        </div>
    </header>
    ) 
};