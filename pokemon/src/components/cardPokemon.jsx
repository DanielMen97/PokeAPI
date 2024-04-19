import React from 'react'
import styles from './styles.module.scss'

const CardPokemon = ({pokemon}) => {

  return (
    <div className={styles.cardContent}>
      <header className={styles.headerContainer}>
        <img className={styles.logoPokeBall} src='./src/assets/img/nofound.png'/>
        <h1 className={styles.namePokemon}>{pokemon.name}</h1>   
      </header>
      <img className={styles.imagePokemon} src={pokemon.sprites.other.dream_world.front_default} />
      <p className={styles.infoPokedex}>
        #{pokemon.id} height: {pokemon.height / 10}m weight: {pokemon.weight / 10}kg
      </p>
      <ul className={styles.listType}>
        {
          pokemon.types.map((item, id) =>(
            <li className={styles.itemType} key={id}>
              <img className={styles.logoType} src={`./src/assets/img/icon/${item.type.name}.svg`} />
              {item.type.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardPokemon
