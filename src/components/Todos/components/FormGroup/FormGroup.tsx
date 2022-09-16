import React from 'react';

import styles from './FormGroup.module.css';

interface FormGroupProps {
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  id: string;
  onCheck?: () => void;
  variant: string;
}

export const FormGroup = ({
  children,
  checked,
  disabled,
  id,
  onCheck,
  variant,
}: FormGroupProps) => (
  <label className={`${styles.label} ${styles[variant]} | flex`} htmlFor={id}>
    <input
      type='checkbox'
      className={`${styles.checkbox} | grid`}
      checked={checked}
      disabled={disabled}
      onChange={onCheck}
      id={id}
    />
    {children}
  </label>
);
