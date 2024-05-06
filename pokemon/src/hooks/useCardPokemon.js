import { useState } from "react";

export function useCardPokemon() {

  const [activeModal, setActiveModal] = useState(false)

  const handleOpenModal = () => setActiveModal(!activeModal)

  return {
    activeModal,
    handleOpenModal
  }
}