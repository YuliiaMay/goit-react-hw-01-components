import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';




export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics
        title="Upload stats"
        stats={data}
      />
  
      <TransactionHistory transactions={transactions} />
    </>
  );
};
