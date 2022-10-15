import { useState, useRef, FormEvent } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import { IAddUser, IError } from '../../interfaces';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }: IAddUser) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<IError | null>(null);

  const addUserHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value ?? '';
    const enteredUserAge = ageInputRef.current?.value ?? '';

    if (!enteredName.trim().length || !enteredUserAge.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({ title: 'Invalid age', message: 'Please enter a valid age (> 0).' });
      return;
    }

    onAddUser(enteredName, +enteredUserAge);
    nameInputRef.current!.value = '';
    ageInputRef.current!.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
