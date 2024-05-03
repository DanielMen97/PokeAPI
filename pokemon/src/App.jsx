import { React, useEffect, useState } from 'react';
import styles from './App.module.scss';
import CardPokemon from './components/cardPokemon/cardPokemon';
import { getArrayPokemons } from './services/services';
import Button from './components/shared/button/button';
import Form from './components/form/form';

const App = () => {

  const [info, setInfo] = useState([])
  const [back, setBack] = useState(false)
  const [offset, setOffset] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const handleLoadMore = () => {
    setOffset(offset + 20)
  }
  const handleBack = () => {
    setInfo([]);
    setOffset(0);
    setBack(!back);
    setShowButton(false)
  }

  useEffect(() => {
    const pokemons = async () => {
      const results = await getArrayPokemons(offset);
      setInfo([...info, ...results])
    }
    pokemons();
  }, [offset, back])
  
  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <img className={styles.tittle} src='.\src\assets\img\logo.png' onClick={handleBack}/>
        <Form setInfo={setInfo} setShowButton={setShowButton}></Form>
      </header>
      <div className={styles.pokeContainer}>
        {
          info?.map((item, id) => (
            <CardPokemon key={id} pokemon={item} />
          ))
        }
      </div>
      {
        (showButton) ?
        <Button text="Volver" onClick={handleBack} /> :
        <Button text="Ver mas Pokemones" icon='"fa-solid fa-angle-down' onClick={handleLoadMore}/>
      }
    </div>
  )
}

export default App
