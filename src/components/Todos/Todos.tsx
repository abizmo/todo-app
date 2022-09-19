import React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { useFilter, useTodos } from '@/hooks';

import { NewTodo, Todo, TodosFilters } from './components';
import styled from './Todos.module.css';

const {
  appContainer,
  todosList,
  todosContainer,
  todosFooter,
  todosFooterClear,
} = styled;

export const Todos = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    clearCompleteTodos,
    reorderTodo,
    toggleTodo,
  } = useTodos();
  const { filter, changeFilter, filtered } = useFilter();

  const todosCount = todos.filter((todo) => !todo.done).length;

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!source || !destination) return;
    if (destination.index === source.index) return;

    reorderTodo(source.index, destination.index);
  };

  return (
    <div className={`${appContainer} | grid`}>
      <NewTodo onSubmit={addTodo} />
      <div className={todosContainer}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='todos'>
            {({ droppableProps, innerRef, placeholder }) => (
              <ul
                className={todosList}
                role='list'
                ref={innerRef}
                {...droppableProps}
              >
                {filtered(todos).map(({ description, done, id }, index) => (
                  <Draggable key={id} draggableId={description} index={index}>
                    {({ draggableProps, dragHandleProps, innerRef }) => (
                      <li
                        {...draggableProps}
                        {...dragHandleProps}
                        ref={innerRef}
                      >
                        <Todo
                          todoId={id}
                          description={description}
                          done={done}
                          id={`todo#${id}`}
                          onCheck={toggleTodo}
                          onDelete={deleteTodo}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className={`${todosFooter} | flex`}>
          <span>{todosCount} items left</span>
          <TodosFilters selected={filter} onFilterBy={changeFilter} />
          <button
            className={`${todosFooterClear} button`}
            onClick={clearCompleteTodos}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <p className='text-center fs-300 text-gray'>
        Drag and drop to reorder list
      </p>
    </div>
  );
};
