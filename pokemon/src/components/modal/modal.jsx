import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useModal } from '../../hooks/useModal'

const Modal = ({pokemon, handleOpenModal}) => {

  const { description } = useModal(pokemon.id)

  return (
    <main className={styles.overlay}>
      <div className={styles.modalContent}>
        <header className={styles.headerModal}>
          <h1>#{pokemon.id}</h1>
          <FontAwesomeIcon
            className={styles.iconClose}
            icon="fa-solid fa-xmark"
            size='2xl'
            onClick={handleOpenModal} />
        </header>
        <section className={styles.sectionModal}>
          <article className={styles.articleModal}>
            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
            <img className={styles.imgPokemon} src={pokemon.sprites.other["official-artwork"].front_default} />
            <p className={styles.infoPokemon}>{description[0]}</p>
          </article>
          <aside className={styles.asideModal}>
            <ul className={styles.listStats}>
              {
                pokemon.stats.map((item, id) => {
                  return (
                    <li key={id} className={styles.statPokemon}>
                      <p className={styles.statName}>{item.stat.name} :</p>
                      <h2 className={styles.statNumber}>{item.base_stat}</h2>
                    </li>)
                })
              }
            </ul>
            <ul className={styles.listType}>
              {
                pokemon.types.map((item, id) => (
                  <li className={styles.itemType} key={id}>
                    <img className={styles.logoType} src={`./src/assets/img/icon/${item.type.name}.svg`} />
                    <p>{item.type.name}</p>
                  </li>
                ))
              }
            </ul>
          </aside>
        </section>
      </div>
    </main>
  )
}

Modal.propTypes = {
  pokemon: PropTypes.object.isRequired,
  handleOpenModal: PropTypes.func.isRequired
}

export default Modal
