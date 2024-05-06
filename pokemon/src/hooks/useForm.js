import { useState, useEffect } from "react"
import { getTypeSelect, getListTypePokemon, resultsFilterPokemon } from '../services/services';

export function useForm(setInfo, setShowButton) {

  const [searchPokemon, setSearchPokemon] = useState("")
  const [optionsSelect, setOptionsSelect] = useState([])
  const [selectValue, setSelectValue] = useState("")

  const handleInput = (event) => {
    const textPokemon = event.target.value
    setSearchPokemon(textPokemon.toLowerCase())
  }
  const handleOnClickInput = async () => {
    const pokemon = await resultsFilterPokemon(searchPokemon)
      setInfo(pokemon);
      setShowButton(true)
  }
  const handleSelect = (event) => {
    setSelectValue(event.target.value)
  }
  const handleTypeSelect = () => {
    getTypeSelect(selectValue, setInfo, setShowButton)
  }
  useEffect(() => {
    getListTypePokemon(setOptionsSelect);
  }, [])

  return {
    optionsSelect,
    selectValue,
    handleInput,
    handleOnClickInput,
    handleSelect,
    handleTypeSelect
  }
}