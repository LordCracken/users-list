import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button';

import {IBackdrop, IErrorModal} from '../../interfaces';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }: IBackdrop) => <div className={classes.backdrop} onClick={onConfirm}></div>;

const ModalOverlay = ({ title, message, onConfirm }: IErrorModal) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}>Okay</Button>
    </footer>
  </Card>
);

const ErrorModal = ({ title, message, onConfirm }: IErrorModal) => (
  <>
    {createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root')!)}
    {createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />, document.getElementById('overlay-root')!)}
  </>
);

export default ErrorModal;
