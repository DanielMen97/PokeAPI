import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import pokemon from '../assets/img-test/1.png'

const CardPokemon = (params) => {
  const [namePokemon, setNamePokemon] = useState([]);
  const [imagen, setImagen] = useState('');
  const [types, setTypes] = useState([])
  useEffect(() =>{
    getPokemon()
  }, [])

  const getPokemon = async() =>{
    const url = params.pokemon.url;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setNamePokemon(data.name);
        setImagen(data.sprites.other.dream_world.front_default);
        setTypes(data.types)
      })
  }

  return (
    <div className={styles.cardContent}>
      <h1 className={styles.namePokemon}>{namePokemon}</h1>
      <img src={imagen}></img>
      <ul>
        {
          types.map((item, id) =>(
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
