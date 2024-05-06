import styles from './styles.module.scss'
import Modal from '../modal/modal'
import { useCardPokemon } from '../../hooks/useCardPokemon'

const CardPokemon = ({pokemon}) => {

  const {activeModal, imgPokemon, handleOpenModal} = useCardPokemon()

  return (
    <>
      <div className={styles.cardContent} onClick={handleOpenModal}>
        <header className={styles.headerContainer}>
          <img className={styles.logoPokeBall} src='./src/assets/img/nofound.png' />
          <h1 className={styles.namePokemon}>{pokemon.name}</h1>
        </header>
        <img className={styles.imagePokemon} src={imgPokemon} />
        <p className={styles.infoPokedex}>
          #{pokemon.id} height: {pokemon.height / 10}m weight: {pokemon.weight / 10}kg
        </p>
        <ul className={styles.listType}>
          {
            pokemon.types.map((item, id) => (
              <li className={styles.itemType} key={id}>
                <img className={styles.logoType} src={`./src/assets/img/icon/${item.type.name}.svg`} />
                {item.type.name}
              </li>
            ))
          }
        </ul>
      </div>
      {
        activeModal && <Modal pokemon={pokemon} handleOpenModal={handleOpenModal} />
      }
      
    </>

  )
}

export default CardPokemon
