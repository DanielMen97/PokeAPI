//Funcion retorna la info de cada Pokemon
const getPokemonData = async (url) => {
  const response = await fetch(url, { method: 'GET' })
  return await response.json()
}

//Funcion que hace la peticion de todos los Pokemones
const getPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`, { method: 'GET' })
  const data = await response.json()
  const pokemonUrl = data.results.map(item => item.url)
  return pokemonUrl
}

//Funcion que crea el arreglo con los objetos de cada Pokemon
export const arrayPokemonData = async () => {
  const pokemonUrl = await getPokemons();
  const pokemonData = await Promise.all(
    pokemonUrl.map(url => getPokemonData(url))
  )
  return pokemonData
}

//Funcion que realiza la consulta de un unico Pokemon
export const getSearchPokemon = async (searchPokemon, setInfo) => {
if(searchPokemon === ""){
  alert("Ingrese nombre o numero del Pokemon que desea consultar")
} else{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`, { method: 'GET' })
    try {
      const data = await response.json()
      const pokemon = []
      pokemon.push(data)
      setInfo(pokemon)
    } catch (error) {
      alert("El Pokemon no existe")
    }
}
}

//Funcion que enlista los tipos de Pokemon
export const getListTypePokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/`, {method: 'GET'})
  const data = await response.json()
      .then(data => data.results)
    return data
}

//Funcion que filtra por tipo de Pokemon
export const getTypeSelect = async (selectValue, setInfo) => {
  if(selectValue === ""){
    console.log("Seleccione un tipo de Pokemon")
  } else {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${selectValue}`, {method: 'GET'})
    const data = await response.json()
      .then(async (data) => {
        const pokemonUrl = data.pokemon.map(item => item.pokemon.url)
        return pokemonUrl
      })
    const pokemonData = await Promise.all(
      data.map(url => getPokemonData(url))
    )
    setInfo(pokemonData)
}}

// const getMorePokemons = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
//   const data = response.json()
//     .then(data => console.log(data.next))
// }

// getMorePokemons()