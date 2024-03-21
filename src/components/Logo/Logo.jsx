import css from './Logo.module.css';

export const Logo = () => {
    return (   
        <a className={`${css.logoLink} link`} href="/index.html">
            Web<span className={css.logoHeader}>
            Studio</span>
        </a>
    ) 
};
   