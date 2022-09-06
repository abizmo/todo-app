import React from 'react';
import Input from '../Input';

type FormType = { newTodo: { value: string } };

type NewTodoType = {
  onSubmit: (description: string) => void;
};

const NewTodo = ({ onSubmit }: NewTodoType) => {
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
      <Input id='newTodo' />
    </form>
  );
};

export default NewTodo;
