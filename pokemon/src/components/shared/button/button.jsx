import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Button = ({text}, icono) => {
  return (
    <button className={styles.buttonComponent}>
      <span className={styles.buttonText}>{text}</span>
       {(true) &&
        <FontAwesomeIcon icon={icono}/>
       }
    </button>
  )
}

export default Button
