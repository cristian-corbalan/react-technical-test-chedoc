import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = forwardRef(function Modal ({ children }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => ({
    showModal: function () {
      modal.current.showModal();
    },
    closeModal: function () {
      modal.current.close();
    }
  }));

  return createPortal((
    <dialog className={styles.modal} ref={modal}>
      {children}
      <footer>
        <form method="dialog">
          <button>Close</button>
        </form>
      </footer>
    </dialog>
  ), document.querySelector('#modals'));
});

export default Modal;
