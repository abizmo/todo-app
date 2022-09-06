import React from 'react';

type InputProps = {
  id: string;
};

const Input = ({ id }: InputProps) => (
  <label className='add-todo | flex' htmlFor={id}>
    <input className='add-todo--checkbox' disabled type='checkbox' />
    <input
      id={id}
      className='add-todo--text'
      type='text'
      placeholder='Create a new todo...'
    />
  </label>
);

export default Input;
