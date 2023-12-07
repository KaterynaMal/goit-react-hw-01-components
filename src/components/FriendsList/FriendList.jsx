import React from 'react';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friend_list}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline ? 'red' : 'green',
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export { FriendListItem };
