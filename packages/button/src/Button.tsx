import React, { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  disabled,
  value,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};
