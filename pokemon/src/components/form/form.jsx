import React, { useEffect, useState } from 'react'
import { /*getSearchPokemon,*/ getTypeSelect, getListTypePokemon, resultsFilterPokemon } from '../../services/services';
import Button from '../shared/button/button';
import styles from './styles.module.scss'

const Form = ({ setInfo, setShowButton }) => {

  const [searchPokemon, setSearchPokemon] = useState("")
  const [optionsSelect, setOptionsSelect] = useState([])
  const [selectValue, setSelectValue] = useState("")

  const handleInput = (event) => {
    const textPokemon = event.target.value
    setSearchPokemon(textPokemon.toLowerCase())
  }
  const handleOnClick = async () => {
    const pokemon = await resultsFilterPokemon(searchPokemon)
    setTimeout(() => {
      setInfo(pokemon)
    }, 1000);
  }
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }
  useEffect(() => {
    getListTypePokemon(setOptionsSelect);
  }, [])

  return (
    <div className={styles.formPokemon}>
      <div className={styles.inputContainer}>
        <input className={styles.searchPokemon} placeholder='Buscar Pokemon...' onChange={handleInput} />
        <Button
          text="Buscar"
          icon='fa-solid fa-magnifying-glass'
          onClick={handleOnClick} />
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
          onClick={() => (getTypeSelect(selectValue, setInfo, setShowButton))} />
      </div>
    </div>
  )
}

export default Form
