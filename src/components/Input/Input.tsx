import React from 'react';

import styles from './Input.module.css';

type InputProps = {
  id: string;
};

const { input, inputCheckbox, inputText } = styles;

const Input = ({ id }: InputProps) => (
  <label className={`${input} | flex`} htmlFor={id}>
    <input className={`${inputCheckbox} | grid`} disabled type='checkbox' />
    <input
      id={id}
      className={inputText}
      type='text'
      placeholder='Create a new todo...'
    />
  </label>
);

export default Input;
