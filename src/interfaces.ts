import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  className: string;
}

export interface IButton {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
