import { React, useEffect, useState } from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'
import { getAllPokemon, getSearchPokemon, getListTypePokemon, getTypeSelect} from './services/services'
import Button from './components/shared/button/button'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  const [info, setInfo] = useState([])
  const [searchPokemon, setSearchPokemon] = useState("")
  const [optionsSelect, setOptionsSelect] = useState([])
  const [selectValue, setSelectValue] = useState("")
  const [back, setBack] = useState(false)
  const [offset, setOffset] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const handleInput = (event) => {
    const textPokemon = event.target.value
    setSearchPokemon(textPokemon.toLowerCase())
  }
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }
  const handleLoadMore = () => {
    setOffset(offset + 20)
  }
  const handleBack = () => {
    setInfo([]);
    setOffset(0);
    setBack(!back);
    setShowButton(!showButton)
  }

  useEffect(() => {
    getAllPokemon(info, setInfo, offset)
    const getOptionsSelect = async () => {
      const listType = await getListTypePokemon()
      setOptionsSelect(listType)
    }
    getOptionsSelect();
  }, [offset, back])
  
  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <img className={styles.tittle} src='.\src\assets\img\logo.png' />
        <div className={styles.inputContainer}>
          <input className={styles.searchPokemon} placeholder='Buscar Pokemon...' onChange={handleInput}/>
          <button className={styles.buttonSearch} onClick={() =>{getSearchPokemon(searchPokemon, setInfo, setShowButton)}}>
            <img style={{width: '20px'}} src='.\src\assets\img\search.svg'/>
          </button>
        </div>
        <div className={styles.inputContainer}>
        <select onChange={handleSelect}>
          <option hidden defaultValue={null}>
            Selecione el tipo de Pokemon:
          </option>
          {
            optionsSelect.map((item, id) =>(
              <option key={id}>
                {item.name}
              </option>
            ))
          }
        </select>
        <button className={styles.buttonSearch} onClick={() =>(getTypeSelect(selectValue, setInfo, setShowButton))}>
          <img style={{width: '20px'}} src='.\src\assets\img\search.svg'  />
        </button>
        </div>
        
      </header>
      <div className={styles.pokeContainer}>
        {
          info?.map((item, id) => (
            <CardPokemon key={id} pokemon={item} />
          ))
        }
      </div>
      {
        (showButton) ?  
        <button className={styles.buttonNav} onClick={handleBack}>Volver</button> : 
        <button className={styles.buttonNav} onClick={handleLoadMore}>Ver mas Pokemones</button>
      }
      <Button text="Hola" icon={{active: true, value: {faCheck}}}></Button>
    </div>
  )
}

export default App
