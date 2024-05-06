import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
