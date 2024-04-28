const getPokemonData = (url) => {
  return fetch(url, {method: 'GET'})
  .then(response => response.json())
}

const getPokemons = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=24`, {method: 'GET'})
    .then(response => response.json())
    .then((data) => {
      const pokemonUrl = data.results.map(item => item.url)
      return pokemonUrl;
    })
}

export const arrayPokemonData = async () => {
  const pokemonUrl = await getPokemons();
  const pokemonData = await Promise.all(
    pokemonUrl.map(url => getPokemonData(url))
  )
  return pokemonData
}

export const handleSearch = async (searchPokemon, setInfo) => {
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

export const listTypePokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/`, {method: 'GET'})
    const data = await response.json()
      .then(data => data.results)
    return data
}