import { React, useEffect, useState } from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'
import { arrayPokemonData, handleSearch, listTypePokemon} from './services/services'

const App = () => {

  const [info, setInfo] = useState([])
  const [searchPokemon, setSearchPokemon] = useState("")
  const [optionsSelect, setOptionsSelect] = useState([])

  useEffect(() => {
    const getArrayPokemon = async () => {
      const pokemonData = await arrayPokemonData()
      setInfo(pokemonData)
    }
    getArrayPokemon();
    const getOptionsSelect = async () => {
      const listType = await listTypePokemon()
      setOptionsSelect(listType)
    }
    getOptionsSelect();
  }, [])

  const handleInputChange = (event) => {
    setSearchPokemon(event)
  }

  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <img className={styles.tittle} src='.\src\assets\img\logo.png' />
        <div className={styles.inputContainer}>
          <input className={styles.searchPokemon} placeholder='Buscar Pokemon...' onChange={() => (handleInputChange(event.target.value))}/>
          <button className={styles.buttonSearch} onClick={() =>{handleSearch(searchPokemon, setInfo)}}>
            <img style={{width: '20px'}} src='.\src\assets\img\search.svg'/>
          </button>
        </div>
        <div className={styles.inputContainer}>
        <select>
          <option hidden selected>
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
        <button className={styles.buttonSearch}>
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
    </div>
  )
}

export default App
