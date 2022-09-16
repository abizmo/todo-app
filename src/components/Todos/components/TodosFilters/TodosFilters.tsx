import React from 'react';

import { FiltersProps, FilterType } from '@/models';

import styled from './TodosFilters.module.css';

const { todosFilters, filtersTab, activeTab } = styled;

export const TodosFilters = ({ selected, onFilterBy }: FiltersProps) => {
  return (
    <div
      className={`${todosFilters} | flex fs-300`}
      role='tablist'
      aria-label='filter'
    >
      {Object.keys(FilterType).map((filter) => (
        <button
          key={filter}
          className={`${filtersTab} ${
            selected === filter ? activeTab : ''
          } | text-gray button`}
          aria-selected='true'
          role='tab'
          aria-controls='todo-items'
          onClick={() => onFilterBy(filter as FilterType)}
        >
          {filter.charAt(0) + filter.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
};
