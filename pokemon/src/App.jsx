import { React, useEffect, useState } from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'
import { arrayPokemonData, getSearchPokemon } from './services/services'

const App = () => {

  const [info, setInfo] = useState([])
  const [globalPokemon, setGlobalPokemon] = useState([])

  useEffect(() => {
    const getArrayPokemon = async () => {
      const pokemonData = await arrayPokemonData()
      setInfo(pokemonData)
    }
    getArrayPokemon();
  }, [])

  const handleSearch = (id) => {
   const searchPokemon = getSearchPokemon(id)
    setGlobalPokemon(searchPokemon)
  }

  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <img className={styles.tittle} src='.\src\assets\img\logo.png' />
        <input className={styles.searchPokemon} type='text' onChange={event => handleSearch(event.target.value)}></input>
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
