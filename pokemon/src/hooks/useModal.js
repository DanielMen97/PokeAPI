import { useState, useEffect } from "react";
import { getDescriptionPokemon } from '../services/services'

export function useModal(id) {

  const [description, setDescription] = useState([])

  useEffect(() => {
    const pokeDescription = async () => {
      const pokemonDes = await getDescriptionPokemon(id);
        setDescription(pokemonDes)
    }
    pokeDescription()
  }, [])
  
  return {
    description
  }
}