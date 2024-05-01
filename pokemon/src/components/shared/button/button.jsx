import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const Button = ({text, icon = "", onClick}) => {
  library.add(fas)
  return (
    <button className={styles.buttonComponent} onClick={onClick}>
     <span className={styles.buttonText}>{text}</span> 
      {
        (icon !== "") &&
        <FontAwesomeIcon className={styles.buttonIcon} icon={icon} />
      }
      
    </button>
  )
}

export default Button
