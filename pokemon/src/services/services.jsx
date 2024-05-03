//Funcion llamar 20 pokemones
export const getAllPokemon = async (offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
  const data = await response.json()
  return data
}

//Funcion que retorna un arreglo con los pokemones solicitados
export const getArrayPokemons = async (offset) => {
  const pokemonData = await getAllPokemon(offset)
  const arrayPokemons = pokemonData.results.map( async (item) => {
    const response = await fetch(item.url)
    const data = await response.json()
    return data
  })
  const results = await Promise.all(arrayPokemons)
  return results
}

//Funcion que enlista los tipos de Pokemon
export const getListTypePokemon = async (setOptionsSelect) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/`, {method: 'GET'})
  const data = await response.json()
      .then(async (data) => setOptionsSelect(data.results))
}

//Funcion que filtra por tipo de Pokemon
export const getTypeSelect = async (selectValue, setInfo, setShowButton) => {
  if(selectValue === ""){
    alert("Seleccione un tipo de Pokemon")
  } else {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${selectValue}`, {method: 'GET'})
    const data = await response.json()
      .then(async (data) => {
        const pokemonUrl = data.pokemon.map(item => item.pokemon.url)
        return pokemonUrl
      })
    const pokemonData = await Promise.all(
      data.map( async(url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      })
    )
    setInfo(pokemonData)
    setShowButton(prev => !prev)
}}

//Funcion para llamar la descripcion del pokemon
export const getDescriptionPokemon = async(id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  try {
    const data = await response.json()
    .then(data => data.flavor_text_entries.map(item => {
      if(item.language.name === "es"){
       return item.flavor_text
      }
    }))
      return (data.filter(item => item !== undefined))
  } catch (error) {
    return ["Sin Descripción"]
  }
  
}

//Funcion llama todos los pokemones
const getAllSearchPokemons = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = await response.json()
  return data.results
}

//Funcion que filtra por el input
 const filterPokemon = async (searchPokemon) => {
   const arrayPokemons = await getAllSearchPokemons()
   const pokemonData = arrayPokemons.filter(item => item.name.includes(searchPokemon))  
    return pokemonData
  }

//Funcion retorna resultados de la busqueda
export const resultsFilterPokemon = async (searchPokemon) => {
  const pokemonData = await filterPokemon(searchPokemon)
  const arrayPokemons = pokemonData.map( async (item) => {
    const response = await fetch(item.url)
    const data = await response.json()
    return data
  })
  const results = await Promise.all(arrayPokemons)
  return results
}