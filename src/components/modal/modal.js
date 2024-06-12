// src/Modal.js
import React from 'react';
import styles from './modal.module.css'; // Importa o CSS Module

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
        
            <section className={styles.modalMain}>
                <div className={styles.container}>
                    <div className={styles.teste}>
                        <button onClick={handleClose}>x</button>
                    </div>
                    <div className={styles.teste2}>
                        {children}
                    </div>
                </div>
            </section>
        
    </div>
  );
};

export default Modal;
