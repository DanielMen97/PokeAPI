import { useState, useEffect } from "react";
import { getArrayPokemons } from '../services/services'

export function useApp() {

  const [info, setInfo] = useState([])
  const [back, setBack] = useState(false)
  const [offset, setOffset] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const isSetInfo = (pokemon) => setInfo(pokemon)

  const isSetShowButton = (state) => setShowButton(state)

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

  return {
    info,
    showButton,
    handleLoadMore,
    handleBack,
    isSetInfo,
    isSetShowButton
  }
}