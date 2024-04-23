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

export const getSearchPokemon = async (id) => {
  const allPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302`)
  const response = await allPokemons.json();
  const promises = response.results.map(async(item) => {
    const res = await fetch(item.url);
    const data = await res.json()
    return data
  })
  const results = await Promise.all(promises)
  return results
  }
