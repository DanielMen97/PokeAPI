import { React, useEffect, useState} from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'
import { createPokemon, getPokemonData, getPokemons } from './services/services'

const App = () => {

  const [info, setInfo] = useState([])
  const [pokemon, setPokemon] = useState({});
  const [imagen, setImagen] = useState('');
  const pokemons = []
  useEffect(() => {
      getPokemons()
        .then((data) => setInfo(data.results))
  }, [])

  useEffect(() =>{
    if(info.length > 0){
      info.map((item) =>{
        const pokemonList = createPokemon(item)
        console.log(pokemonList[0])
        pokemons.push(pokemonList)
        setPokemon(pokemonList[0])
      }
      )
    }    
  }, [info])

  console.log(pokemon)

  return (
    <div className={styles.app}>
      <h1 className={styles.tittle}>POKEMON</h1>
      <div className={styles.pokeContainer}>
        {/* {
          info?.map((item, id) =>(
            <CardPokemon key={id} pokemon={item}/>
          ))  
        } */}
      </div>
    </div>
  )
}

export default App
