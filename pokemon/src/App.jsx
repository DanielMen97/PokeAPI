import styles from './App.module.scss';
import CardPokemon from './components/cardPokemon/cardPokemon';
import Button from './components/shared/button/button';
import Form from './components/form/form';
import { useApp } from './hooks/useApp';

const App = () => {

  const { info, showButton, handleLoadMore, handleBack, isSetShowButton, isSetInfo } = useApp()
  
  return (
    <div className={styles.app}>
      <header className={styles.headerApp}>
        <img className={styles.tittle} src='.\src\assets\img\logo.png' onClick={handleBack}/>
        <Form setInfo={isSetInfo} setShowButton={isSetShowButton}></Form>
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
