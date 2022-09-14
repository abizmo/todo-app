import React from 'react';

import { FormGroup } from '../UI/FormGroup';
import styles from './NewTodo.module.css';

type FormType = { newTodo: { value: string } };

type NewTodoType = {
  onSubmit: (description: string) => void;
};

export const NewTodo = ({ onSubmit }: NewTodoType) => {
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const target = evt.target as typeof evt.target & FormType;
    const description = target.newTodo.value;

    if (description.trim() === '') return;

    onSubmit(description);
    target.newTodo.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup variant='input' id='new' disabled>
        <input
          id='newTodo'
          className={styles.newTodo}
          type='text'
          placeholder='Create a new todo...'
        />
      </FormGroup>
    </form>
  );
};
