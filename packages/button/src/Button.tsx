import React, { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ className, disabled, value }) => {
  return (
    <button className={className} disabled={disabled}>
      {value}
    </button>
  );
};
