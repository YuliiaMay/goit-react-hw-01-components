import css from './FriendListItem.module.css';
import { FaCheckSquare, FaCircle } from 'react-icons/fa';



export const FriendListItem = (friends) => {
    const { avatar, name, status} = friends;
        return (
            <li className={css.item}>
                { (status) 
                    ? (<span> <FaCheckSquare className={css.onlineStatusIcon} size={20} /> </span>)
                    : (<span> <FaCircle className={css.offlineStatusIcon} size={20} /> </span>)
                }

                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )
}
