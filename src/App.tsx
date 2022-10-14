import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

import { IUser } from './interfaces';

const App = () => {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
