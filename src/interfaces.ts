import { ReactNode } from 'react';

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export interface ICard {
  children: ReactNode;
  className?: string;
}

export interface IButton {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export interface IAddUser {
  onAddUser: (uName: string, uAge: number) => void;
}

export interface IUsersList {
  users: IUser[];
}
