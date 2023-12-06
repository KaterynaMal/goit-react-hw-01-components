import React from 'react';
import user from '../data/user.json';
import data from '../data/data.json';

import Profile from './Profile';
import Statistics from './Statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
    </div>
  );
};


