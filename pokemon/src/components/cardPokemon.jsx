import React from 'react'
import styles from './styles.module.scss'

const CardPokemon = ({pokemon}) => {

  return (
    <div className={styles.cardContent}>
      <h1 className={styles.namePokemon}>{pokemon.name}</h1>
      <img className={styles.imagePokemon} src={pokemon.sprites.other.dream_world.front_default} />
      <ul>
        {
          pokemon.types.map((item, id) =>(
            <li key={id}>
              <img src={`./src/assets/img/icon/${item.type.name}.svg`}></img>
              {item.type.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardPokemon
