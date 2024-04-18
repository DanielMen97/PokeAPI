export const getPokemons = () => {

  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=30`, {method: 'GET'})
  .then(response => response.json())
}

export const getPokemonData = (url) => {
  return fetch(url, {method: 'GET'})
  .then(response => response.json())
}

export const createPokemon = (item) => {
  getPokemonData(item.url)
    .then(data => data)
}

const prueba = fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
  .then(response => response.json())
  .then(data => { 
      data.results.map((item) =>{
      fetch(item.url)
        .then(response => response.json())
        .then(dato => console.log(dato))
  })
})