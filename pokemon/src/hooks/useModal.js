import { useState, useEffect } from "react";
import { getDescriptionPokemon } from '../services/services'

export function useModa() {

  const [description, setDescription] = useState([])

  useEffect(() => {
    const pokeDescription = async () => {
      const pokemonDes = await getDescriptionPokemon(pokemon.id);
        setDescription(pokemonDes)
    }
    pokeDescription()
  }, [])
  
  return {
    description
  }
}