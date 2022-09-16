import React from 'react';

import iconCross from '@/assets/images/icon-cross.svg';

import { FormGroup } from '../FormGroup';

import styles from './Todo.module.css';

interface TodoProps {
  description: string;
  done: boolean;
  id: string;
  onCheck: (todoId: number) => void;
  onDelete: (todoId: number) => void;
  todoId: number;
}

const { todoDescription, todoClose, todoDescriptionDone } = styles;

export const Todo = ({
  description,
  done,
  id,
  onCheck,
  onDelete,
  todoId,
}: TodoProps) => (
  <FormGroup
    variant='todo'
    id={id}
    checked={done}
    onCheck={() => onCheck(todoId)}
  >
    <span className={`${todoDescription} ${done ? todoDescriptionDone : ''}`}>
      {description}
    </span>
    <button className={`button ${todoClose}`} onClick={() => onDelete(todoId)}>
      <img src={iconCross} alt='Delete task' />
    </button>
  </FormGroup>
);
