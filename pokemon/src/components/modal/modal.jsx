import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({pokemon, activeModal, setActiveModal}) => {
  return (   
    <>
      {activeModal &&(
        <main className={styles.overlay}>
          <div className={styles.modalContent}>
            <header>
              <h1>#{pokemon.id}</h1>
              <FontAwesomeIcon 
                icon="fa-solid fa-xmark" 
                size='2xl' 
                onClick={() => {setActiveModal(!activeModal)}}/>
            </header>
            <section>
            <article>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.other.dream_world.front_default} />
              <p>Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.</p>
            </article>
            <aside>
            </aside>
            </section>     
          </div>
        </main>
      )
      }
    </>
  )
}

export default Modal
