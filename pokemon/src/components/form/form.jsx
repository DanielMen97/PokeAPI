import { useForm } from '../../hooks/useForm';
import Button from '../shared/button/button';
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const Form = ({setInfo, setShowButton}) => {

  const { handleTypeSelect, handleOnClickInput, handleSelect, optionsSelect, handleInput } = useForm(setInfo, setShowButton)

  return (
    <div className={styles.formPokemon}>
      <div className={styles.inputContainer}>
        <input className={styles.searchPokemon} placeholder='Buscar Pokemon...' onChange={handleInput} />
        <Button
          text="Buscar"
          icon='fa-solid fa-magnifying-glass'
          onClick={handleOnClickInput} />
      </div>
      <div className={styles.inputContainer}>
        <select className={styles.selectType} onChange={handleSelect}>
          <option className={styles.optionDefault} hidden defaultValue={null}>
            Selecione el tipo de Pokemon:
          </option>
          {
            optionsSelect.map((item, id) => (
              <option key={id}>
                {item.name}
              </option>
            ))
          }
        </select>
        <Button
          text="Buscar"
          icon='fa-solid fa-magnifying-glass'
          onClick={handleTypeSelect} />
      </div>
    </div>
  )
}

Form.propTypes = {
  setInfo: PropTypes.func.isRequired, 
  setShowButton: PropTypes.func.isRequired
}

export default Form
