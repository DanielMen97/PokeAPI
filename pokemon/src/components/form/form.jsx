import React, { useEffect, useState } from 'react'
import { getSearchPokemon, getTypeSelect, getListTypePokemon } from '../../services/services';
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
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }
  useEffect(() => {
    getListTypePokemon(setOptionsSelect);
  }, [])
  return (
    <div>
      <div className={styles.inputContainer}>
        <input className={styles.searchPokemon} placeholder='Buscar Pokemon...' onChange={handleInput} />
        <Button
          text="Buscar"
          icon='fa-solid fa-magnifying-glass'
          onClick={() => { getSearchPokemon(searchPokemon, setInfo, setShowButton) }} />
      </div>
      <div className={styles.inputContainer}>
        <select onChange={handleSelect}>
          <option hidden defaultValue={null}>
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
