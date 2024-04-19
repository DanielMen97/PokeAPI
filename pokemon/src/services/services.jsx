const getPokemonData = (url) => {
  return fetch(url, {method: 'GET'})
  .then(response => response.json())
}

const getPokemons = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=50&limit=90`, {method: 'GET'})
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