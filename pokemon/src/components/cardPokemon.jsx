import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const CardPokemon = ({pokemons}) => {
const [pokemon, setPokemon] = useState({});
const [imagen, setImagen] = useState('');

  useEffect(() =>{
    
    fetch(pokemons.url, {method: 'GET'})
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setImagen(data.sprites.other.dream_world.front_default);
      })
  }, [])

  console.log(pokemon.sprites.other)

  return (
    <div className={styles.cardContent}>
      <h1 className={styles.namePokemon}>{pokemon.name}</h1>
      {/* <img src={pokemon.sprites.other.dream_world.front_default}></img> */}
      <ul>
        {
          pokemon.types?.map((item, id) =>(
            <li key={id}>
              {item.type.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardPokemon
