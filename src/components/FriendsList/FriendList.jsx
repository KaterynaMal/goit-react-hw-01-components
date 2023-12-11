import React from 'react';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

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


