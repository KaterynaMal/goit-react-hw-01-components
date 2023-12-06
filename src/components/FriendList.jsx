import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
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
    <li className="item" key={id}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export { FriendListItem };
