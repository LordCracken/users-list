import { useState, FormEvent, ChangeEvent } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import { IAddUser } from '../../interfaces';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }: IAddUser) => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredAge, setEnteredAge] = useState<string>('');

  const addUserHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!enteredUsername.trim().length || !enteredAge.trim().length) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    onAddUser(enteredUsername, +enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
