import { React, useEffect, useState} from 'react'
import styles from './App.module.scss'
import CardPokemon from './components/cardPokemon'

const App = () => {

  const [info, setInfo] = useState()
  useEffect(() => {
    const promesa = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
    promesa
        .then(resp => resp.json())
        .then((data) => setInfo(data.results))
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
