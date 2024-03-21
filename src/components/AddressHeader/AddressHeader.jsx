
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import css from './AddressHeader.module.css';
export const AddressHeader = () => {
    return (
         <ul className={`${css.contactList} list`}>
            <li>
                <a className={css.mailto} href="mailto:info@webstudio.com">
                    <IoMailOutline className={css.icon }/> 
                    info@webstudio.com</a>
            </li>
            <li>
                <a className={css.tel} href="tel:+380961111111">
                    <BsTelephone className={css.icon }/>
                        +38 096 111 11 11</a>
            </li>
        </ul>
    )
};