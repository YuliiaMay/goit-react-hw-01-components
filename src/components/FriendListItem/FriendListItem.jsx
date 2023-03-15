import css from './FriendListItem.module.css';
import { FaCheckSquare, FaCircle } from 'react-icons/fa';



export const FriendListItem = ({ avatar, name, isOnline}) => {
        return (
            <li className={css.item}>
                { (isOnline ) 
                    ? (<span> <FaCheckSquare /> </span>)
                    : (<span> <FaCircle /> </span>)
                }

                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
}
