import css from './FriendList.module.css';
import { FriendListItem } from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <FriendListItem
                    key={id}
                    status={isOnline}
                    avatar={avatar}
                    name={name}
                />
            )}
        </ul>
    )
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}