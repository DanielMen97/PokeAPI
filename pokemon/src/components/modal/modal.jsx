import React from 'react'
import styles from './styles.module.scss'

const Modal = ({pokemon, activeModal, setActiveModal}) => {
  console.log(activeModal)
  return (   
    <>
      {activeModal &&(
        <div className={styles.modalContent}>
          Hola Mundo!!!
        </div>
      )
      }
    </>
  )
}

export default Modal
