import { useState } from "react";
import imgDefault from '../../assets/img/imgDefault.png';

export function useCardPokemon() {

  const [activeModal, setActiveModal] = useState(false)

  const handleOpenModal = () => setActiveModal(!activeModal)

  const imgPokemon = (pokemon.sprites.other.dream_world.front_default)
    ? pokemon.sprites.other.dream_world.front_default : imgDefault

  return {
    activeModal,
    imgPokemon,
    handleOpenModal
  }
}