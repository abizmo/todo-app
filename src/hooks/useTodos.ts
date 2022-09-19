import { useEffect, useState } from 'react';

import { TodosType } from '@/models';
import { getTodos } from '@/services';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);

  useEffect(() => {
    (async () => {
      const initialTodos = await getTodos();
      setTodos(initialTodos);
    })();
  }, []);

  const addTodo = (description: string) => {
    setTodos((prevTodos) => {
      const newTodos = [
        ...prevTodos,
        {
          id: new Date().getTime(),
          description,
          done: false,
        },
      ];

      return newTodos;
    });
  };

  const deleteTodo = (todoId: number) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

  const clearCompleteTodos = () =>
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));

  const toggleTodo = (todoId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const reorderTodo = (source: number, destination: number) => {
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(source, 1);
    items.splice(destination, 0, reorderedItem);
    setTodos(items);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    clearCompleteTodos,
    toggleTodo,
    reorderTodo,
  };
};
