import { React, useEffect, useState} from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'
import {arrayPokemonData } from './services/services'

const App = () => {

  const [info, setInfo] = useState([])

  useEffect(() =>{
    const getArrayPokemon = async() => {
      const pokemonData = await arrayPokemonData()
      setInfo(pokemonData)
    }
    getArrayPokemon();
  }, [])

  return (
    <div className={styles.app}>
      <h1 className={styles.tittle}>POKEMON</h1>
      <div className={styles.pokeContainer}>
         {
          info?.map((item, id) =>(
            <CardPokemon key={id} pokemon={item}/>
          ))  
        }
      </div>
    </div>
  )
}

export default App
