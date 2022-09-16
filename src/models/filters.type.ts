export enum FilterType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export interface FiltersProps {
  selected: FilterType;
  onFilterBy: (filter: FilterType) => void;
}
